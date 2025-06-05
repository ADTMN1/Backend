const express = require("express");
const connectDB = require("./config/db");
const tasksRouter = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>Task Manager API is running with MongoDB</h2>");
});

app.use("/api/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
