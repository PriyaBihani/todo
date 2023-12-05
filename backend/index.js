const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const app = express();

// app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.static("public"));

// Pages Routes
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/pages/login.html");
});

app.get("/todos", (req, res) => {
  res.sendFile(__dirname + "/pages/todos.html");
});

// API Routes
app.get("/api/todos", async (req, res) => {
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

app.post("/api/todos", async (req, res) => {
  try {
    const data = await fs.promises.readFile("./db.json", "utf8");
    const parsedData = JSON.parse(data);
    const newTodo = {
      id: uuidv4(),
      title: req.body.title,
      completed: false,
    };
    parsedData.push(newTodo);
    await fs.promises.writeFile("./db.json", JSON.stringify(parsedData));
    res.status(201).json({
      status: "success",
      msg: "Todo created successfully",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
});

app.patch("/api/todos/:id", async (req, res) => {
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

    const updatedData = parsedData.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          ...req.body,
        };
      }
      return ele;
    });

    await fs.promises.writeFile("./db.json", JSON.stringify(updatedData));

    res.status(200).json({
      status: "success",
      msg: "Todo updated successfully",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
});

app.delete("/api/todos/:id", async (req, res) => {
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
