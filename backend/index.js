require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const pagesRouter = require("./routes/pages");
const authRouter = require("./routes/api/auth");
const todosRouter = require("./routes/api/todos");
const { logger } = require("./middlewares");

const app = express();

app.use(logger);
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.use("/", pagesRouter);
app.use("/api", authRouter);
app.use("/api/todos", todosRouter);

app.get("/logout", (req, res) => {
  res.clearCookie("access_token");
  res.redirect("/login");
});

mongoose.connect(
  "mongodb+srv://test:test@cluster0.ns07ha3.mongodb.net/todoapp"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("MongoDB connected successfully"));

const PORT = 8000;
app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}.`);
});
