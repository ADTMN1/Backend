const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
