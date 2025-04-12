# Claude AI Integration Guide

To integrate **Claude AI** into your application, you'll need to set up the following environment variable.

---

## How to Obtain the Keys

### 1. Obtain Your API Key

Follow these steps to obtain your **Claude AI API key**:

1. Visit the [Claude AI API Documentation](https://claude.ai/docs) and log in or create an account if you haven't already.
2. Once logged in, navigate to the **API Keys** section in your account settings.
3. Create a new API key (or use an existing one).
4. Copy the generated API key.

---

### 2. Add the API Key to Your `.env` File

Once you have your **API Key**, add the following to your `.env` file:

```env
# Claude AI API Integration
NEXT_PUBLIC_CLAUDE_API_KEY="your-claude-api-key"
```

Make sure to replace `"your-claude-api-key"` with the key you copied in the previous step.

---

## Restart Your Application

After adding the key to your `.env` file, restart your server to apply the changes.

---

For more details on integrating and using Claude AI, refer to the [Claude AI API Documentation](https://claude.ai/docs).

---