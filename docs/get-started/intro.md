
# Indie Launch - AI SaaS Starter Template

Welcome to **Indie Launch**, the perfect starting point for building AI-powered SaaS applications with **Next.js**.

## Getting Started


### Step 1: Unzip the Repository

Start by downloading the ZIP file for **Indie Launch**. Once downloaded, unzip the file and navigate to the project directory:

```
unzip indielaunch.zip
cd indielaunch
npm install
```
### Step 2: Configure Environment Variables

Rename the `.env.example` file to `.env` and update the necessary environment variables:

```bash
mv .env.example .env
```

Edit the `.env` file with your actual credentials and keys:

```env
# =================
# App Configuration
# =================
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# =================
# Authentication
# =================
AUTH_SECRET="YOUR_AUTH_SECRET"
TOKEN_SECRET="YOUR_TOKEN_SECRET"
GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"

# =================
# Database
# =================
MONGODB_URI="YOUR_MONGODB_URI"

# =================
# Email Service
# =================
RESEND_API_KEY="YOUR_RESEND_API_KEY"
RESEND_EMAIL_URL="YOUR_RESEND_EMAIL_URL"

EMAIL_USER="YOUR_EMAIL_USER"
EMAIL_PASSWORD="YOUR_EMAIL_PASSWORD"

# =================
# Payment Providers
# =================
NEXT_PUBLIC_LEMON_SQUEEZY_API_KEY="your-api-key"
NEXT_PUBLIC_LEMON_SQUEEZY_STORE_ID="your-store-id"
LEMON_SQUEEZY_WEBHOOK_SECRET="your-webhook-secret"

NEXT_PUBLIC_LEMON_SQUEEZY_BASIC_MONTHLY="123"
NEXT_PUBLIC_LEMON_SQUEEZY_PRO_MONTHLY="456"
NEXT_PUBLIC_LEMON_SQUEEZY_ENTERPRISE_MONTHLY="789"

NEXT_PUBLIC_DODO_PAYMENTS_API_KEY=""
DODOPAYMENTS_WEBHOOK_SECRET=""

NEXT_PUBLIC_STRIPE_SECRET_KEY="sk_test_your_secret_key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your_publishable_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# =================
# File Upload
# =================
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=""

# =================
# AI Integration
# =================
NEXT_PUBLIC_CHATGPT_KEY=""
NEXT_PUBLIC_CLAUDE_KEY=""
```

### Step 3: Run the App

Now you can start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

---

## Next Steps

Now that you have the base setup, here are a few things you can do next:

- **Customize the UI**: Modify the pre-built UI components to match your branding and design.
- **Add Your Content**: Set up your blog posts, dashboards, and other content management.
- **Integrate AI**: If you want to add more AI capabilities, check the `AI Integration` section in the `.env` file for ChatGPT and Claude API keys.
- **Set Up Payments**: Connect your Stripe, Lemon Squeezy, or Dodo Payments API keys for handling payments.

---

## Helpful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Stripe Documentation](https://stripe.com/docs)
- [ChatGPT API](https://platform.openai.com/docs)
- [Claude AI](https://claude.ai/docs)

