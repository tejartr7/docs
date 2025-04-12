
# Cloudinary Setup

To integrate **Cloudinary** for file uploads, you will need to obtain your **Cloudinary Cloud Name** and **Upload Preset**.

---

## How to Obtain Your Cloudinary Keys

1. **Sign Up/Log In:**
   - If you don't already have a Cloudinary account, [sign up here](https://cloudinary.com/users/register).
   - If you already have an account, log in to [Cloudinary Dashboard](https://cloudinary.com/console).

2. **Obtain Your Cloud Name:**
   - After logging in, go to the **Dashboard**.
   - On the **Dashboard**, you will see the **Cloud Name**. This is the unique identifier for your Cloudinary account. You’ll need this to configure your app.

3. **Create an Upload Preset:**
   - Navigate to the **Settings** section in the dashboard.
   - Under **Upload**, find the **Upload Presets** section and create a new preset.
   - Choose the configuration settings that suit your project needs (e.g., image types, transformation options).
   - Once created, you’ll have an **Upload Preset**. 

---

## Add the Credentials to Your `.env` File

After obtaining your Cloudinary **Cloud Name** and **Upload Preset**, add the following to your `.env` file:

```env
# Cloudinary File Upload Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="your-upload-preset"
```

Replace the placeholders with the values you obtained:
- `your-cloud-name`: Your unique Cloudinary Cloud Name.
- `your-upload-preset`: The upload preset you created.

---

## Restart Your Application

After updating your `.env` file with the appropriate keys, make sure to restart your application to apply the changes.

---

For more detailed information on Cloudinary integrations, check out their official [documentation](https://cloudinary.com/documentation/upload_images).

---