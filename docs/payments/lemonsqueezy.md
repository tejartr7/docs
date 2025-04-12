# Lemon Squeezy Setup

To integrate **Lemon Squeezy** as your payment provider, you'll need to set up the following environment variables.

For more information and references, visit the official [Lemon Squeezy documentation](https://docs.lemonsqueezy.com/help).

---

## How to Obtain the Keys

### 1. **Create a Lemon Squeezy Account**

If you don’t have a Lemon Squeezy account, go to the [Lemon Squeezy website](https://www.lemonsqueezy.com/) and sign up.

### 2. **Obtain API Key, Store ID, and Webhook Secret**

Once logged into your [Lemon Squeezy dashboard](https://app.lemonsqueezy.com/), follow these steps to get the necessary credentials:

1. **API Key**:
   - In your Lemon Squeezy dashboard, go to the **Developers** section.
   - There you’ll find your **API Key** (both **live** and **test** versions). Copy the **API key** and use it in the `.env` file.

2. **Store ID**:
   - In the **Store Settings** section of your dashboard, you’ll find your **Store ID**. Copy this ID and use it in your `.env` file.

3. **Webhook Secret**:
   - If you’re using webhooks, you can configure them in the **Webhooks** section.
   - After setting up your webhook URL, you’ll be provided with a **Webhook Secret**. Copy this secret and add it to your `.env` file.

---

## API Configuration

After obtaining your keys, add the following environment variables to your `.env` file:

```env
# Lemon Squeezy API Configuration
NEXT_PUBLIC_LEMON_SQUEEZY_API_KEY="your-api-key"
NEXT_PUBLIC_LEMON_SQUEEZY_STORE_ID="your-store-id"
LEMON_SQUEEZY_WEBHOOK_SECRET="your-webhook-secret"
```

---

## Monthly Plans

Define the monthly plan IDs for your basic, pro, and enterprise plans by adding the following to your `.env` file:

```env
# Lemon Squeezy Monthly Plans
NEXT_PUBLIC_LEMON_SQUEEZY_BASIC_MONTHLY="123"
NEXT_PUBLIC_LEMON_SQUEEZY_PRO_MONTHLY="456"
NEXT_PUBLIC_LEMON_SQUEEZY_ENTERPRISE_MONTHLY="789"
```

You can find these plan IDs in the Lemon Squeezy dashboard under the **Plans** section.

---

## Yearly Plans

Similarly, add the yearly plan IDs for your basic, pro, and enterprise plans:

```env
# Lemon Squeezy Yearly Plans
NEXT_PUBLIC_LEMON_SQUEEZY_BASIC_YEARLY="321"
NEXT_PUBLIC_LEMON_SQUEEZY_PRO_YEARLY="654"
NEXT_PUBLIC_LEMON_SQUEEZY_ENTERPRISE_YEARLY="987"
```

Again, retrieve these plan IDs from the **Plans** section in the Lemon Squeezy dashboard.

---

## Test Setup

To set up **Lemon Squeezy** in your **test** environment (for testing payments), you'll need to use the **test API keys** provided in the Lemon Squeezy dashboard. These are specifically designed for testing payments without actually processing real transactions.

1. Log into your [Lemon Squeezy Dashboard](https://app.lemonsqueezy.com/).
2. Go to the **Developers** section to get your **Test API Key**.
3. Follow the same steps for **Store ID** and **Webhook Secret** as in the production setup, but use the **test credentials**.

Once you have those keys, update your `.env` file like this:

```env
# Lemon Squeezy API Configuration for Testing
NEXT_PUBLIC_LEMON_SQUEEZY_API_KEY="your-test-api-key"
NEXT_PUBLIC_LEMON_SQUEEZY_STORE_ID="your-test-store-id"
LEMON_SQUEEZY_WEBHOOK_SECRET="your-test-webhook-secret"

# Monthly Plans for Testing
NEXT_PUBLIC_LEMON_SQUEEZY_BASIC_MONTHLY="your-test-basic-monthly-id"
NEXT_PUBLIC_LEMON_SQUEEZY_PRO_MONTHLY="your-test-pro-monthly-id"
NEXT_PUBLIC_LEMON_SQUEEZY_ENTERPRISE_MONTHLY="your-test-enterprise-monthly-id"

# Yearly Plans for Testing
NEXT_PUBLIC_LEMON_SQUEEZY_BASIC_YEARLY="your-test-basic-yearly-id"
NEXT_PUBLIC_LEMON_SQUEEZY_PRO_YEARLY="your-test-pro-yearly-id"
NEXT_PUBLIC_LEMON_SQUEEZY_ENTERPRISE_YEARLY="your-test-enterprise-yearly-id"
```

---

## Production Setup

For **production**, make sure to use the **live keys** provided in the Lemon Squeezy dashboard. Replace the placeholder values in your `.env` file with your live API key, store ID, webhook secret, and plan IDs.

```env
# Lemon Squeezy API Configuration for Production
NEXT_PUBLIC_LEMON_SQUEEZY_API_KEY="your-live-api-key"
NEXT_PUBLIC_LEMON_SQUEEZY_STORE_ID="your-live-store-id"
LEMON_SQUEEZY_WEBHOOK_SECRET="your-live-webhook-secret"

# Monthly Plans for Production
NEXT_PUBLIC_LEMON_SQUEEZY_BASIC_MONTHLY="your-live-basic-monthly-id"
NEXT_PUBLIC_LEMON_SQUEEZY_PRO_MONTHLY="your-live-pro-monthly-id"
NEXT_PUBLIC_LEMON_SQUEEZY_ENTERPRISE_MONTHLY="your-live-enterprise-monthly-id"

# Yearly Plans for Production
NEXT_PUBLIC_LEMON_SQUEEZY_BASIC_YEARLY="your-live-basic-yearly-id"
NEXT_PUBLIC_LEMON_SQUEEZY_PRO_YEARLY="your-live-pro-yearly-id"
NEXT_PUBLIC_LEMON_SQUEEZY_ENTERPRISE_YEARLY="your-live-enterprise-yearly-id"
```

Make sure to restart your application after updating the `.env` file to reflect the changes.

---

## Restart Your Application

After you’ve updated your `.env` file with the correct keys for **production** or **test**, make sure to restart your server to apply the changes.

---

For more details on integrating and using Lemon Squeezy, refer to the [official Lemon Squeezy documentation](https://docs.lemonsqueezy.com/help).

--- 
