const express = require("express");
const Todo = require("./../models/todo");
const { authMiddleware } = require("../middlewares");
const path = require("path");

const router = express.Router();

router.get("/login", (req, res) => {
  if (req.cookies.access_token) {
    return res.redirect("/todos");
  }
  res.sendFile(path.resolve(__dirname, "../pages/login.html"));
});

router.get("/signup", (req, res) => {
  if (req.cookies.access_token) {
    return res.redirect("/todos");
  }
  res.sendFile(path.resolve(__dirname, "../pages/signup.html"));
});

router.get("/todos", authMiddleware, async (req, res) => {
  const todos = await Todo.find({ userId: req.userId }).populate(
    "userId",
    "-password"
  );
  res.send(`
    <h1> Hello </h1>
    ${todos
      .map((todo) => {
        return `<div>
        <h3>${todo.title}</h3>
        <p>${todo.completed}</p>
        </div>`;
      })
      .join("")}
  `);

  // res.sendFile(path.resolve(__dirname, "../pages/todos.html"));
});

module.exports = router;
