# Blog Manager 

The **Blog Manager** is a dedicated admin interface for managing all blog-related activities on the platform. It provides a clean and efficient way for admins to create, view, edit, search, and delete blog posts.

---

## Features

- **Blog Listing with Pagination**
  - Lists all blog posts with pagination (10 per page)
  - Fetches data from `/api/admin/blogs`

- **Search Functionality**
  - Allows admins to search blog posts using a keyword (title/content)
  - Search query is preserved in the URL using query parameters (`?q=...`)

- **Blog Actions**
  - **View Blog:** Opens the blog in a new tab
  - **Edit Blog:** Redirects to `/admin/blogs/edit/[slug]` for editing
  - **Delete Blog:** Shows a confirmation dialog before deleting a blog

- **Create New Blog**
  - A button is available to create a new blog at `/admin/blogs/new`

- **Blog Card Layout**
  - Responsive grid of cards showing:
    - Cover image
    - Title
    - Excerpt
    - Date created
    - Author
    - Actions (View, Edit, Delete)

---

## Technologies Used

- **Next.js App Router**
- **React Hooks (`useState`, `useEffect`)**
- **Tailwind CSS + shadcn/ui**
- **Lucide React Icons**
- **react-hot-toast** for toast notifications
- **Alert Dialog** for delete confirmation

---

## API Endpoints

- `GET /api/admin/blogs?page=1&q=searchTerm` – Get paginated blogs
- `DELETE /api/admin/blogs/:slug` – Delete a blog by slug

---

## How It Works

- On initial load or when the URL parameters (`page`, `q`) change, the component fetches blog data.
- Blog data and pagination info are saved in state and rendered in a responsive layout.
- The delete action is protected with a confirmation dialog.
- Admins can interact with blogs directly via View/Edit/Delete buttons.


---

