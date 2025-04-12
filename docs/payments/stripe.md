# Stripe Payment Provider Setup

To integrate **Stripe** as your payment provider, you'll need to set up the following environment variables.

For more information and references, visit the official [Stripe documentation](https://stripe.com/docs).

---

## How to Obtain the Keys

### 1. **Create a Stripe Account**

If you don't already have a Stripe account, go to the [Stripe website](https://stripe.com) and create one.

### 2. **Get Test Keys**

Once your account is set up:

1. Log into your [Stripe Dashboard](https://dashboard.stripe.com/).
2. Navigate to the **Developers** section in the sidebar.
3. Under **API keys**, you'll find your **Test Secret Key** and **Test Publishable Key**.
   - **Test Secret Key**: It starts with `sk_test_`.
   - **Test Publishable Key**: It starts with `pk_test_`.
4. Copy these keys for use in your `.env` file.

### 3. **Get Webhook Secret (Optional)**

If you're using webhooks, you'll need to set this up:

1. In the **Developers** section, go to **Webhooks**.
2. Click **Add endpoint** and provide your endpoint URL (the URL where Stripe will send webhook events).
3. After adding the endpoint, Stripe will provide a **Webhook Secret** that starts with `whsec_`. Copy this key for use in your `.env` file.

---

## Test Setup

To set up **Stripe** in your **test** environment (for testing payments), you'll need to use the **test keys** provided by Stripe. These keys allow you to simulate transactions without processing real payments.

Add the following to your `.env` file for **testing**:

```env
# Stripe API Configuration for Testing
STRIPE_SECRET_KEY="sk_test_your_test_secret_key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your_test_publishable_key"
STRIPE_WEBHOOK_SECRET="whsec_your_test_webhook_secret"

# Monthly Plans for Testing
NEXT_PUBLIC_STRIPE_PRICE_BASIC_MONTHLY="price_your_test_basic_monthly_id"
NEXT_PUBLIC_STRIPE_PRICE_PRO_MONTHLY="price_your_test_pro_monthly_id"
NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE_MONTHLY="price_your_test_enterprise_monthly_id"

# Yearly Plans for Testing
NEXT_PUBLIC_STRIPE_PRICE_BASIC_YEARLY="price_your_test_basic_yearly_id"
NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY="price_your_test_pro_yearly_id"
NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE_YEARLY="price_your_test_enterprise_yearly_id"
```

Once you’ve made the necessary changes, restart your application for the updates to take effect. You can now simulate test payments using these keys.

---

## Production Setup

For **production**, make sure to use the **live keys** provided by Stripe. Replace the placeholder values in your `.env` file with your live API keys, plan IDs, and webhook secret.

Follow these steps to get the **live keys**:

1. Go to your [Stripe Dashboard](https://dashboard.stripe.com/).
2. Under **Developers** > **API keys**, you'll see your **Live Secret Key** and **Live Publishable Key**.
   - **Live Secret Key**: It starts with `sk_live_`.
   - **Live Publishable Key**: It starts with `pk_live_`.
3. Copy these keys for use in your `.env` file.

---

Add the following to your `.env` file for **production**:

```env
# Stripe API Configuration for Production
STRIPE_SECRET_KEY="sk_live_your_live_secret_key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_your_live_publishable_key"
STRIPE_WEBHOOK_SECRET="whsec_your_live_webhook_secret"

# Monthly Plans for Production
NEXT_PUBLIC_STRIPE_PRICE_BASIC_MONTHLY="price_your_live_basic_monthly_id"
NEXT_PUBLIC_STRIPE_PRICE_PRO_MONTHLY="price_your_live_pro_monthly_id"
NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE_MONTHLY="price_your_live_enterprise_monthly_id"

# Yearly Plans for Production
NEXT_PUBLIC_STRIPE_PRICE_BASIC_YEARLY="price_your_live_basic_yearly_id"
NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY="price_your_live_pro_yearly_id"
NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE_YEARLY="price_your_live_enterprise_yearly_id"
```

Be sure to **test the payments in a staging environment** before deploying to production to ensure everything works as expected.

---

## Restart Your Application

After updating your `.env` file, remember to **restart your server** to apply the changes.

---

For more detailed information on integrating and using Stripe, refer to the [Stripe documentation](https://stripe.com/docs).

---
