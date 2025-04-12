# User Management

This section explains how user management is implemented in the project.

---

## Authentication and Access Control

- Uses `next-auth` for session handling.
- Redirects to `/auth/signin` if the user is unauthenticated.
- Only authenticated users can fetch and manage users.

---

## Data Fetching

- Data is fetched from `/api/admin/users`.
- If the API call returns a 403, the user is redirected to the homepage.
- Errors during fetching are logged and displayed using a `<Card>` with an error message.

---

## User Role Management

- Admins can change a user's role using a dropdown or similar UI in `UserTable`.
- Logic ensures that an admin **cannot** demote another admin.
- The role update is done via a `PATCH` request to `/api/admin/users`.

```ts
PATCH /api/admin/users
Body: {
  userId: string,
  role: string
}
```

- On success: shows a toast and updates local state.
- On failure: shows an error toast.

---

## Subscription Management

- Each user has a subscription object with fields like:
  - `renewsAt`
  - `trialEndsAt`
  - `endsAt`
  - `subscription_end_date`
  - `lastPaymentDate`

- Admin can edit subscription using a dialog box `SubscriptionEditDialog`.

- Subscriptions are updated via:

```ts
PATCH /api/admin/users/subscription
Body: {
  email: string,
  subscription: { ... }
}
```

- Dates are formatted into ISO strings before sending.
- Toasts are used for success and failure notifications.

---
