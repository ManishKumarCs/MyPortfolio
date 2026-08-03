from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import uuid
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime, timezone, timedelta

from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email (Resend) — sign up free at https://resend.com to get your own API key
RESEND_API_URL = "https://api.resend.com/emails"
RESEND_API_KEY = os.environ["RESEND_API_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
EMAIL_FROM_ADDRESS = os.environ.get("EMAIL_FROM_ADDRESS", "onboarding@resend.dev")
OWNER_EMAIL = os.environ["OWNER_EMAIL"]

# Rate limiter — 5 submissions per hour per IP
limiter = Limiter(key_func=get_remote_address)

app = FastAPI(title="Manish Kumar Portfolio API")
app.state.limiter = limiter
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    role: Optional[str] = Field(default="", max_length=120)
    company: Optional[str] = Field(default="", max_length=120)
    message: str = Field(..., min_length=1, max_length=5000)


class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    role: str = ""
    company: str = ""
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


def build_email_html(c: ContactCreate) -> str:
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 0;font-family:Arial,Helvetica,sans-serif;">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#0f0f12;border:1px solid #1f1f24;border-radius:16px;overflow:hidden;">
          <tr><td style="padding:28px 32px;border-bottom:1px solid #1f1f24;">
            <p style="margin:0;color:#00F0FF;font-size:12px;letter-spacing:2px;text-transform:uppercase;">New Recruiter Message</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;">Portfolio Contact Form</h1>
          </td></tr>
          <tr><td style="padding:28px 32px;">
            <p style="margin:0 0 6px;color:#8a8a94;font-size:12px;">FROM</p>
            <p style="margin:0 0 20px;color:#ffffff;font-size:16px;font-weight:bold;">{c.name} &lt;{c.email}&gt;</p>
            <p style="margin:0 0 6px;color:#8a8a94;font-size:12px;">COMPANY</p>
            <p style="margin:0 0 20px;color:#ffffff;font-size:15px;">{c.company or '—'}</p>
            <p style="margin:0 0 6px;color:#8a8a94;font-size:12px;">ROLE / OPPORTUNITY</p>
            <p style="margin:0 0 20px;color:#ffffff;font-size:15px;">{c.role or '—'}</p>
            <p style="margin:0 0 6px;color:#8a8a94;font-size:12px;">MESSAGE</p>
            <p style="margin:0;color:#d4d4d8;font-size:15px;line-height:1.6;white-space:pre-line;">{c.message}</p>
          </td></tr>
          <tr><td style="padding:20px 32px;border-top:1px solid #1f1f24;">
            <p style="margin:0;color:#5a5a63;font-size:12px;">Reply directly to this email to reach {c.name}.</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


def build_autoreply_html(c: ContactCreate) -> str:
    first_name = c.name.split(' ')[0] if c.name else "there"
    context_line = ""
    if c.role and c.company:
        context_line = f' regarding <strong style="color:#fff;">{c.role}</strong> at <strong style="color:#fff;">{c.company}</strong>'
    elif c.role:
        context_line = f' regarding <strong style="color:#fff;">{c.role}</strong>'
    elif c.company:
        context_line = f' from <strong style="color:#fff;">{c.company}</strong>'

    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 0;font-family:Arial,Helvetica,sans-serif;">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#0f0f12;border:1px solid #1f1f24;border-radius:16px;overflow:hidden;">
          <tr><td style="padding:28px 32px;border-bottom:1px solid #1f1f24;">
            <p style="margin:0;color:#00F0FF;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Message Received</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;">Thanks for reaching out, {first_name}!</h1>
          </td></tr>
          <tr><td style="padding:28px 32px;">
            <p style="margin:0 0 16px;color:#d4d4d8;font-size:15px;line-height:1.6;">
              I've received your message{context_line} and will get back to you within 24–48 hours.
            </p>
            <p style="margin:0;color:#d4d4d8;font-size:15px;line-height:1.6;">
              In the meantime, feel free to check out my work or connect with me on LinkedIn.
            </p>
          </td></tr>
          <tr><td style="padding:20px 32px;border-top:1px solid #1f1f24;">
            <p style="margin:0;color:#ffffff;font-size:14px;font-weight:bold;">Manish Kumar</p>
            <p style="margin:2px 0 0;color:#5a5a63;font-size:12px;">Full Stack Developer</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


async def send_email(to: List[str], subject: str, html: str, reply_to: Optional[str] = None) -> None:
    payload = {
        "from": f"{EMAIL_FROM_NAME} <{EMAIL_FROM_ADDRESS}>",
        "to": to,
        "subject": subject,
        "html": html,
    }
    if reply_to:
        payload["reply_to"] = reply_to

    async with httpx.AsyncClient(timeout=30) as http_client:
        resp = await http_client.post(
            RESEND_API_URL,
            headers={"Authorization": f"Bearer {RESEND_API_KEY}"},
            json=payload,
        )
    resp.raise_for_status()


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Manish Kumar Portfolio API"}


@api_router.post("/contact", response_model=Contact)
@limiter.limit("5/hour")
async def create_contact(request: Request, payload: ContactCreate):
    # Duplicate-submission guard: same email + message within the last 2 minutes
    # is treated as a repeat click / retry, not a new inquiry.
    cutoff = (datetime.now(timezone.utc) - timedelta(minutes=2)).isoformat()
    existing = await db.contacts.find_one(
        {
            "email": payload.email,
            "message": payload.message,
            "created_at": {"$gte": cutoff},
        },
        {"_id": 0},
    )
    if existing:
        return existing

    contact = Contact(**payload.model_dump())
    await db.contacts.insert_one(contact.model_dump())

    # Notify the owner — this one matters, so a failure here surfaces to the user.
    try:
        await send_email(
            to=[OWNER_EMAIL],
            subject=f"Portfolio: {payload.name} — {payload.role or 'New message'}",
            html=build_email_html(payload),
            reply_to=payload.email,
        )
    except httpx.HTTPStatusError as e:
        logger.error(f"Owner email send failed: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="Message saved but email notification failed.")
    except Exception as e:
        logger.error(f"Owner email send error: {str(e)}")
        raise HTTPException(status_code=502, detail="Message saved but email notification failed.")

    # Auto-reply to the sender — best-effort. If this fails, don't fail the
    # whole request: the message was already saved and the owner was notified.
    try:
        await send_email(
            to=[payload.email],
            subject=f"Thanks for reaching out, {payload.name.split(' ')[0]}!",
            html=build_autoreply_html(payload),
        )
    except Exception as e:
        logger.error(f"Auto-reply email send error: {str(e)}")

    return contact


@api_router.get("/contacts", response_model=List[Contact])
async def list_contacts():
    docs = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_exception_handler(RateLimitExceeded, lambda request, exc: HTTPException(
    status_code=429, detail="Too many submissions. Please try again later."
))
app.add_middleware(SlowAPIMiddleware)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()