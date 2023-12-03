const express = require("express");
const fs = require("fs");

const app = express();

app.use(logger);

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.get("/todos", async (req, res) => {
  try {
    const data = await fs.promises.readFile("./db.json", "utf8");
    const parsedData = JSON.parse(data);
    res.status(200).json({
      status: "success",
      msg: "Todos retrieved successfully",
      data: parsedData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: [],
    });
  }
});

function logger(req, res, next) {
  console.log(req.method, req.url, new Date());
  next();
}

const PORT = 8000;
app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}.`);
});
