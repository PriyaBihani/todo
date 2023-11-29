const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  //   console.log(req);
  res.status(700).send("Hello World from express");
});

app.get("/posts", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }

    res.status(302).json(JSON.parse(data));
  });
});

const PORT = 8000;
app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}.`);
});
