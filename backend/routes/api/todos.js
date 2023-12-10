const express = require("express");

const { authMiddleware } = require("../../middlewares");
const { readFromFile, writeToFile } = require("../../utils");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const parsedData = await readFromFile("./db.json");

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

router.post("/", authMiddleware, async (req, res) => {
  try {
    const parsedData = await readFromFile("./db.json");

    const newTodo = {
      id: uuidv4(),
      title: req.body.title,
      completed: false,
    };
    parsedData.push(newTodo);

    await writeToFile("./db.json", parsedData);

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

router.patch("/:id", authMiddleware, async (req, res) => {
  try {
    const parsedData = await readFromFile("./db.json");

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

    await writeToFile("./db.json", updatedData);

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

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const parsedData = await readFromFile("./db.json");

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
    await writeToFile("./db.json", filteredData);

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

module.exports = router;