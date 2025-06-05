# Task Manager API

A simple RESTful API built with Node.js, Express, and MongoDB for managing tasks.

---

Features

- View all tasks
- Add a new task
- Mark task as completed
- Delete a task
- Filter tasks by status (`completed`, `pending`)
- Validation to ensure task title is not empty

---

 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv (for environment variables)

---

 API Endpoints

| Method | Route             | Description                     |
|--------|------------------|---------------------------------|
| GET    | `/api/tasks`      | Get all tasks                   |
| GET    | `/api/tasks?status=completed` | Get completed tasks       |
| GET    | `/api/tasks?status=pending`   | Get pending tasks         |
| POST   | `/api/tasks`      | Add new task `{ title }`        |
| PUT    | `/api/tasks/:id`  | Mark task as completed          |
| DELETE | `/api/tasks/:id`  | Delete a task                   |

---

 Setup Instructions

```bash
Clone the repository
git clone https://github.com/your-username/task-manager-backend.git

Navigate to backend
cd backend

Install dependencies
npm install

# Start MongoDB server locally or set your MongoDB URI in a .env file

# Start the server
npm start
