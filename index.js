const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  //   console.log(req);
  res.status(700).send("Hello World from express");
});

// app.get("/myname", (req, res) => {
//   res.send("Hello ");
// });

app.get("/myname/:name", function (req, res) {
  console.log(req.params);
  const { name } = req.params;
  res.status(200).send(`Hello my name is ${name}`);
});

app.get("/posts", (req, res) => {
  console.log(req.query);
  const { count } = req.query;
  if (count) {
    fs.readFile("./db.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      const posts = JSON.parse(data);

      res.status(302).json(posts.slice(0, count));
    });
  } else {
    fs.readFile("./db.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }

      res.status(302).json(JSON.parse(data));
    });
  }
});

const PORT = 8000;
app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}.`);
});
