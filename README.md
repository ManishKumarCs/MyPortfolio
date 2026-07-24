# Manish Kumar — Portfolio

React (CRA + craco) frontend, FastAPI + MongoDB backend for the contact form.

## Project structure

```
frontend/   React app (this is what gets deployed as your site)
backend/    FastAPI API — only used for the contact form (/api/contact)
```

## Local setup

### 1. Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Edit `backend/.env`:
- `MONGO_URL` — local Mongo (`mongodb://localhost:27017`) or a MongoDB Atlas connection string
- `RESEND_API_KEY` — get a free key at https://resend.com
- `OWNER_EMAIL` — your inbox for contact form submissions

Run it:
```bash
uvicorn server:app --reload --port 8000
```

### 2. Frontend

```bash
cd frontend
yarn install
yarn start
```

`frontend/.env` -> `REACT_APP_BACKEND_URL` should point at your backend
(`http://localhost:8000` locally, your deployed API URL in production).

### 3. Build for deployment

```bash
cd frontend
yarn build
```
Deploy the `frontend/build` folder as a static site. Deploy `backend/` as its own
service (needs Python + a MongoDB instance available).

## Contact form email

Contact form submissions are stored in MongoDB and emailed to you via
Resend (https://resend.com). Free tier is enough for a portfolio. Sign up,
grab an API key, and drop it into `backend/.env`.
