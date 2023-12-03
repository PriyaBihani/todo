const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const app = express();

app.use(logger);
app.use(express.json());

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

app.post("/todos", async (req, res) => {
  try {
    const data = await fs.promises.readFile("./db.json", "utf8");
    const parsedData = JSON.parse(data);
    parsedData.push({
      id: uuidv4(),
      title: req.body.title,
      completed: false,
    });
    await fs.promises.writeFile("./db.json", JSON.stringify(parsedData));
    res.status(201).json({
      status: "success",
      msg: "Todo created successfully",
      data: parsedData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const data = await fs.promises.readFile("./db.json", "utf8");
    const parsedData = JSON.parse(data);

    const { id } = req.params;
    const todo = parsedData.find((ele) => ele.id === id);

    if (!todo) {
      return res.status(404).json({
        status: "error",
        msg: "Todo not found",
        data: null,
      });
    }

    const filteredData = parsedData.filter((ele) => ele.id !== id);
    await fs.promises.writeFile("./db.json", JSON.stringify(filteredData));

    res.status(200).json({
      status: "success",
      msg: "Todo deleted successfully",
      data: filteredData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
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
