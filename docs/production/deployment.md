
# Deployment Guide for Vercel

This guide will walk you through the process of deploying your project to **Vercel**. It's designed to be as easy and beginner-friendly as possible.

---

## Prerequisites

Before you start, you should have:
1. A **Vercel** account: [Sign up here](https://vercel.com/signup).
2. Your project ready (e.g., a Next.js app).
3. All necessary **environment variables** set up in your `.env` file (see below for more details).

---

## Step 1: Sign Up/Login to Vercel

1. Go to [Vercel's website](https://vercel.com/).
2. Click on **Sign Up** if you don't already have an account, or **Login** if you do.

---

## Step 2: Connect Your Git Repository

1. Once logged in, click on **New Project**.
2. Vercel will ask you to connect your GitHub, GitLab, or Bitbucket account. Choose your preferred platform and authorize Vercel.
3. Once connected, Vercel will list all your repositories.
4. Select the repository for your project.

---

## Step 3: Set Up Your Environment Variables

Vercel allows you to set environment variables directly on their platform. Here’s how you can set them:

1. In your Vercel dashboard, go to your **Project Settings**.
2. Navigate to the **Environment Variables** section.
3. Add the environment variables from your `.env` file (listed below). For each variable, use the **Key** and **Value** from the `.env` file in the form provided by Vercel.

---

### Environment Variables:

```env
# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Authentication
AUTH_SECRET="YOUR_AUTH_SECRET"
TOKEN_SECRET="YOUR_TOKEN_SECRET"

# Google OAuth
GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"

# Database
MONGODB_URI="YOUR_MONGODB_URI"

# Email Service
RESEND_API_KEY="YOUR_RESEND_API_KEY"
RESEND_EMAIL_URL="YOUR_RESEND_EMAIL_URL"
EMAIL_USER="YOUR_EMAIL_USER"
EMAIL_PASSWORD="YOUR_EMAIL_PASSWORD"

# Payment Providers
NEXT_PUBLIC_LEMON_SQUEEZY_API_KEY="your-api-key"
NEXT_PUBLIC_LEMON_SQUEEZY_STORE_ID="your-store-id"
LEMON_SQUEEZY_WEBHOOK_SECRET="your-webhook-secret"
NEXT_PUBLIC_DODO_PAYMENTS_API_KEY="dodo_api_xxxxxxxxxxxxx"
DODOPAYMENTS_WEBHOOK_SECRET="whsec_xxxxxxxxxxxxxxxx"
STRIPE_SECRET_KEY="sk_test_your_secret_key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your_publishable_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=""
NEXT_PUBLIC_CHATGPT_KEY=""
NEXT_PUBLIC_CLAUDE_KEY=""
```

Add these environment variables in Vercel's **Environment Variables** section by clicking **Add** for each one. Make sure you replace the placeholder values with your actual keys.

---

## Step 4: Deploy the Project

Once the environment variables are set up, click the **Deploy** button in Vercel.

Vercel will:
- Build your project.
- Deploy it to their platform.
- Provide a **URL** where you can access your app.

---

## Step 5: Access Your Deployed App

After Vercel finishes deploying your app, you will see a **deployment URL**. This is the live URL for your project.

You can now share your app with others or integrate it further.

---

## Troubleshooting

If you encounter issues during the deployment process, here are a few things to check:
1. **Environment Variables**: Double-check if all the environment variables are correctly added in Vercel.
2. **Build Errors**: Look at the build logs in Vercel’s dashboard to see if there are any issues with your project.
3. **Vercel Documentation**: Refer to [Vercel’s official docs](https://vercel.com/docs) for more advanced configurations and troubleshooting.

---

That's it! Your app is now deployed on Vercel. Enjoy the process and feel free to ask for help if needed! 

--- 

