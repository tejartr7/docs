
# User Authentication Setup

Authentication is fully integrated. You only need to configure environment variables.

> First complete: [Getting Started](intro)  
> For MongoDB setup: [MongoDB Setup](mongodb)

---

## 1. App Configuration

- `NEXT_PUBLIC_APP_URL`  
  - **Dev:** `http://localhost:3000`  
  - **Prod:** Your deployed domain (e.g., `https://your-domain.com`)

---

## 2. Authentication Secrets

- `AUTH_SECRET`  
  - Generate using: `openssl rand -base64 32`  
  - Used by NextAuth to sign and encrypt sessions

- `TOKEN_SECRET`  
  - Also a long, random secret  
  - Used for internal token operations

---

## 3. Google OAuth

- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`

  Steps:
  1. Visit [Google Cloud Console](https://console.cloud.google.com/)
  2. Create a project
  3. Navigate to: **APIs & Services → Credentials**
  4. Click **Create Credentials → OAuth Client ID**
  5. Choose **Web Application**
  6. Set redirect URIs:  
     - Dev: `http://localhost:3000/api/auth/callback/google`  
     - Prod: `https://your-domain.com/api/auth/callback/google`
  7. Copy the:
     - `Client ID` → `GOOGLE_CLIENT_ID`
     - `Client Secret` → `GOOGLE_CLIENT_SECRET`

---

## 4. Email Service

Choose one method — **Resend** or **Nodemailer**

---

### Option 1: Resend

- `RESEND_API_KEY`  
- `RESEND_EMAIL_URL`

   Steps:
  1. Go to [Resend](https://resend.com/)
  2. Create account & generate API key
  3. Go to **Domains**, add & verify your domain
  4. Use a verified domain email like `noreply@yourdomain.com` → `RESEND_EMAIL_URL`

---

### Option 2: Nodemailer (SMTP)

- `EMAIL_USER`  
- `EMAIL_PASSWORD`

  Steps:
  1. Use Gmail or another provider
  2. Set `EMAIL_USER` as your email
  3. If using Gmail, generate App Password from [Google App Passwords](https://myaccount.google.com/apppasswords)
     → Use it as `EMAIL_PASSWORD`

---

## Final `.env` Reference

Here’s a complete reference `.env` file you can copy and fill in:

```env
# =================
# App Configuration
# =================
NEXT_PUBLIC_APP_URL="http://localhost:3000"
# For production: "https://your-domain.com"

# =================
# Authentication
# =================
AUTH_SECRET="your_auth_secret" # Generate securely
TOKEN_SECRET="your_token_secret"

# Google OAuth
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# =================
# Database
# =================
MONGODB_URI="your_mongodb_uri"

# =================
# Email Service
# =================
# Option 1: Resend
RESEND_API_KEY="your_resend_api_key"
RESEND_EMAIL_URL="noreply@yourdomain.com"

# Option 2: Nodemailer (SMTP)
EMAIL_USER="your_email@example.com"
EMAIL_PASSWORD="your_email_password"
```

---
