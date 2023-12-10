const express = require("express");
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

router.get("/todos", authMiddleware, (req, res) => {
  res.sendFile(path.resolve(__dirname, "../pages/todos.html"));
});

module.exports = router;
