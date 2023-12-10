require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

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

const PORT = 8000;
app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}.`);
});
