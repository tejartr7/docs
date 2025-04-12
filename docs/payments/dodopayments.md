# Dodo Payments Setup

To integrate **Dodo Payments** as your payment provider, you will need to configure your API keys and product IDs in your `.env` file.

For more detailed references, visit the official [Dodo Payments Documentation](https://docs.dodopayments.com/introduction).

---

## How to Obtain the Keys

### 1. **Create a Dodo Payments Account**

If you don't have a Dodo Payments account yet, sign up at [Dodo Payments](https://www.dodopayments.com/).

### 2. **Obtain API Key, Webhook Secret, and Product IDs**

Once logged into your [Dodo Payments Dashboard](https://dashboard.dodopayments.com/), follow these steps to get the necessary credentials:

1. **API Key**:
   - In the **API Keys** section of your Dodo Payments dashboard, you’ll find your **API Key** (both **live** and **test** versions).
   - Copy the **API Key** to use in your `.env` file.

2. **Webhook Secret**:
   - In the **Webhook Settings** section, create a webhook URL and copy the **Webhook Secret**.
   - You’ll need this secret to handle events securely.

3. **Product IDs**:
   - Go to the **Products** section of your dashboard and get the product IDs for each of your plans.
   - You’ll have IDs for each plan like **Basic Monthly**, **Pro Monthly**, **Enterprise Monthly**, etc. Copy these IDs for use in your `.env` file.

---

## API Configuration

After obtaining your keys, add the following environment variables to your `.env` file:

```env
# Dodo Payments API Configuration
NEXT_PUBLIC_DODO_PAYMENTS_API_KEY="your-api-key"
DODOPAYMENTS_WEBHOOK_SECRET="your-webhook-secret"
```

---

## Monthly Plans

Define the monthly plan IDs for your basic, pro, and enterprise plans by adding the following to your `.env` file:

```env
# Dodo Payments Monthly Plans
NEXT_PUBLIC_DODO_PAYMENTS_BASIC_MONTHLY="prod_xxxxxxxx1"
NEXT_PUBLIC_DODO_PAYMENTS_PRO_MONTHLY="prod_xxxxxxxx2"
NEXT_PUBLIC_DODO_PAYMENTS_ENTERPRISE_MONTHLY="prod_xxxxxxxx3"
```

You can find these product IDs in the **Products** section of your Dodo Payments dashboard.

---

## Yearly Plans

Similarly, add the yearly plan IDs for your basic, pro, and enterprise plans:

```env
# Dodo Payments Yearly Plans
NEXT_PUBLIC_DODO_PAYMENTS_BASIC_YEARLY="prod_yyyyyyyy1"
NEXT_PUBLIC_DODO_PAYMENTS_PRO_YEARLY="prod_yyyyyyyy2"
NEXT_PUBLIC_DODO_PAYMENTS_ENTERPRISE_YEARLY="prod_yyyyyyyy3"
```

Again, retrieve these plan IDs from the **Products** section in the Dodo Payments dashboard.

---

## Test Setup

To set up **Dodo Payments** in your **test** environment (for testing payments), you'll need to use the **test API keys** provided in the Dodo Payments dashboard. These are specifically designed for testing payments without actually processing real transactions.

```env
# Dodo Payments API Configuration for Testing
NEXT_PUBLIC_DODO_PAYMENTS_API_KEY="your-test-api-key"
DODOPAYMENTS_WEBHOOK_SECRET="your-test-webhook-secret"

# Monthly Plans for Testing
NEXT_PUBLIC_DODO_PAYMENTS_BASIC_MONTHLY="your-test-basic-monthly-id"
NEXT_PUBLIC_DODO_PAYMENTS_PRO_MONTHLY="your-test-pro-monthly-id"
NEXT_PUBLIC_DODO_PAYMENTS_ENTERPRISE_MONTHLY="your-test-enterprise-monthly-id"

# Yearly Plans for Testing
NEXT_PUBLIC_DODO_PAYMENTS_BASIC_YEARLY="your-test-basic-yearly-id"
NEXT_PUBLIC_DODO_PAYMENTS_PRO_YEARLY="your-test-pro-yearly-id"
NEXT_PUBLIC_DODO_PAYMENTS_ENTERPRISE_YEARLY="your-test-enterprise-yearly-id"
```

---

## Production Setup

For **production**, use the **live keys** provided in the Dodo Payments dashboard. Replace the placeholder values in your `.env` file with your live API key, webhook secret, and product IDs.

```env
# Dodo Payments API Configuration for Production
NEXT_PUBLIC_DODO_PAYMENTS_API_KEY="your-live-api-key"
DODOPAYMENTS_WEBHOOK_SECRET="your-live-webhook-secret"

# Monthly Plans for Production
NEXT_PUBLIC_DODO_PAYMENTS_BASIC_MONTHLY="your-live-basic-monthly-id"
NEXT_PUBLIC_DODO_PAYMENTS_PRO_MONTHLY="your-live-pro-monthly-id"
NEXT_PUBLIC_DODO_PAYMENTS_ENTERPRISE_MONTHLY="your-live-enterprise-monthly-id"

# Yearly Plans for Production
NEXT_PUBLIC_DODO_PAYMENTS_BASIC_YEARLY="your-live-basic-yearly-id"
NEXT_PUBLIC_DODO_PAYMENTS_PRO_YEARLY="your-live-pro-yearly-id"
NEXT_PUBLIC_DODO_PAYMENTS_ENTERPRISE_YEARLY="your-live-enterprise-yearly-id"
```

Make sure to restart your application after updating the `.env` file to reflect the changes.

---

## Restart Your Application

After you’ve updated your `.env` file with the correct keys for **production** or **test**, make sure to restart your server to apply the changes.

---

For more details on integrating and using Dodo Payments, refer to the [official Dodo Payments documentation](https://docs.dodopayments.com/introduction).

---
