# 📝 Task Manager Backend

A simple **Task Manager API** built using **Node.js** and **Express.js**, with MongoDB as the database.  
This project is part of my backend development learning journey, focusing on building and understanding RESTful APIs.

---

## 🚀 Features
- Create a new task
- Retrieve all tasks
- Get a single task by ID
- Update an existing task
- Delete a task
- Error handling and middleware usage

---

## 🛠 Tech Stack
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

---

## 📂 Project Structure

Task\_Manager\_Backend/
│── src/
│   ├── db/          # MongoDB connection
│   ├── models/      # Mongoose schemas
│   ├── routes/      # API routes
│   ├── controllers/ # Controller logic
│   └── app.js       # Express app
│
│── .env             # Environment variables
│── package.json     # Dependencies and scripts
│── README.md



## ⚙️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/Karthick-19/Task_Manager_Backend.git
   cd Task_Manager_Backend


2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment variables**
   Create a `.env` file in the root with:

   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   ```

4. **Run the server**

   ```bash
   npm start
   ```

   Server will start at: `http://localhost:5000`

---

## 📌 API Endpoints

### Base URL: `http://localhost:5000/api/tasks`

| Method | Endpoint | Description         |
| ------ | -------- | ------------------- |
| POST   | `/`      | Create a new task   |
| GET    | `/`      | Get all tasks       |
| GET    | `/:id`   | Get a task by ID    |
| PATCH  | `/:id`   | Update a task by ID |
| DELETE | `/:id`   | Delete a task by ID |

---

## 🧪 Example Request (Create Task)

```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Learn Node.js",
  "completed": false
}
```

---

## 🎯 Future Improvements

* Add authentication (JWT)
* User-specific tasks
* Pagination & filtering
* Deploy on cloud (Heroku/Render/OCI)

---

## 📖 Learning Outcomes

* Express.js routing & middleware
* CRUD with MongoDB
* REST API best practices
* Environment configuration

---

## 👤 Author

**Karthick Cruze**
📌 Learning Node.js, Backend Development & Integration Systems.
🔗 [GitHub](https://github.com/Karthick-19)

```
