const express = require("express");
const fs = require("fs");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
  res.status(700).send("Hello World from express");
});

app.get("/myname/:name", authMiddleware, function (req, res) {
  const { name } = req.params;
  res.status(200).send(`Hello my name is ${name}`);
});

app.get("/posts", authMiddleware, (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }

    res.status(302).json(JSON.parse(data));
  });
});

function logger(req, res, next) {
  console.log(req.method, req.url, new Date());
  next();
}

function authMiddleware(req, res, next) {
  if (req.query.admin === "true") {
    console.log("I am authorised");
    next();
  } else {
    res.status(401).send("You are not authorised");
  }
}

const PORT = 8000;
app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}.`);
});
