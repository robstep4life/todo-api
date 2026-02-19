const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET /todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST /todos
router.post("/", async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.json(todo);
});

// GET /todos/:id
router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
});

// PUT /todos/:id
router.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

// DELETE /todos/:id
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
