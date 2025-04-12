# MongoDB Setup

The AI SaaS Starter Kit is pre-configured with MongoDB for handling authentication, sessions, and other data. You just need to set the environment variable correctly.

---

## Steps to Get Your MongoDB URI

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create an account and a new **free cluster**
3. Click on **Database → Connect**
4. Select **Connect your application**
5. Copy the **connection string** for Node.js  
   It will look like this:
   ```
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/<db-name>?retryWrites=true&w=majority
   ```
6. Replace `<username>`, `<password>`, and `<db-name>` with your actual values
7. Paste the full string into your `.env` file as `MONGODB_URI`

---

## Tips for Production

- Whitelist your production server’s IP or allow access from everywhere (less secure)
- Store credentials securely using your deployment platform's secrets system (e.g., Vercel, Railway)

---

## Final `.env` Reference

```env
# =================
# Database
# =================
MONGODB_URI="your_full_mongodb_connection_string"
```

---