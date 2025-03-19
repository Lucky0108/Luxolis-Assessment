# Blog App - Full Stack

## Description
This is a simple full-stack blog application that allows users to:
- View a list of blog posts.
- View details of a specific blog post.
- Add a new blog post.
- Update an existing blog post.

The application consists of a backend (Node.js with Express and MongoDB) and a frontend (React with Tailwind CSS). Both parts are set up to run together using a single command.

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js (>=16.x)
- npm or yarn
- MongoDB (if using a database for storage)

### Installation
1. Clone the repository:
   ```sh
   git clone <repo_url>
   cd blog-app
   ```

2. Install dependencies for both frontend and backend:
   ```sh
   npm install
   ```

---

## Running the Application

### Start Backend & Frontend Together

To start both frontend and backend simultaneously, run:
```sh
npm start
```

Alternatively, you can start them separately:
- Start backend:
  ```sh
  cd backend
  npm run dev
  ```
- Start frontend:
  ```sh
  cd frontend
  npm start
  ```

### Environment Variables
Create a `.env` file inside the `backend` folder and add:
```sh
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogDB
```
For frontend, create a `.env` file inside the `frontend` folder:
```sh
REACT_APP_API_URL=http://localhost:5000/api
```

---

## API Endpoints
- **GET /api/posts** - Retrieve all blog posts
- **GET /api/posts/:id** - Retrieve a single blog post by ID
- **POST /api/posts** - Create a new blog post
- **PUT /api/posts/:id** - Update an existing blog post

---

## Project Structure
```
Luxolis-Assessment/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── .env
│   ├── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── .env
│   ├── tailwind.config.js
│   ├── index.js
├── package.json
├── README.md
```

---

## Notes
- The frontend uses **React with Tailwind CSS**.
- The backend is built with **Express.js and MongoDB**.
- Ensure MongoDB is running before starting the backend.
