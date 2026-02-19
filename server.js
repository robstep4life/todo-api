const express = require("express");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todos");

const app = express();

connectDB();

app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Todo API running");
});

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
