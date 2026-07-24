"""Backend API tests for Manish Kumar Portfolio.

Covers:
- Root health endpoint
- POST /api/contact success (uses delivered@resend.dev to avoid spamming owner)
- POST /api/contact validation (422 for missing fields / bad email)
- GET /api/contacts returns list with newest first
"""
import os
import time
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback to frontend/.env
    from pathlib import Path
    env_path = Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().strip('"').rstrip("/")
                break

API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data


# ---------- Contact create ----------
class TestContactCreate:
    def test_create_contact_success(self, api_client):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_Recruiter_{unique}",
            "email": "delivered@resend.dev",
            "company": "TEST Co",
            "role": "SDET / Automation",
            "message": f"TEST message {unique} — automated backend test.",
        }
        r = api_client.post(f"{API}/contact", json=payload, timeout=60)
        assert r.status_code == 200, f"Expected 200, got {r.status_code}: {r.text}"
        data = r.json()
        # Data assertions
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["company"] == payload["company"]
        assert data["role"] == payload["role"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        # Persist for downstream test
        pytest.created_contact_name = payload["name"]

    def test_create_contact_missing_name(self, api_client):
        r = api_client.post(f"{API}/contact", json={
            "email": "delivered@resend.dev",
            "message": "no name"
        })
        assert r.status_code == 422

    def test_create_contact_missing_message(self, api_client):
        r = api_client.post(f"{API}/contact", json={
            "name": "TEST_NoMsg",
            "email": "delivered@resend.dev",
        })
        assert r.status_code == 422

    def test_create_contact_invalid_email(self, api_client):
        r = api_client.post(f"{API}/contact", json={
            "name": "TEST_BadEmail",
            "email": "not-an-email",
            "message": "hi",
        })
        assert r.status_code == 422

    def test_create_contact_empty_name(self, api_client):
        r = api_client.post(f"{API}/contact", json={
            "name": "",
            "email": "delivered@resend.dev",
            "message": "hi",
        })
        assert r.status_code == 422


# ---------- Contact list ----------
class TestContactList:
    def test_list_contacts_recent_first(self, api_client):
        r = api_client.get(f"{API}/contacts")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        assert len(data) >= 1
        # Sort check (newest first)
        if len(data) >= 2:
            assert data[0]["created_at"] >= data[1]["created_at"]
        # created contact should appear
        created_name = getattr(pytest, "created_contact_name", None)
        if created_name:
            names = [c.get("name") for c in data]
            assert created_name in names
        # Ensure Mongo _id is NOT leaked
        for c in data[:5]:
            assert "_id" not in c
