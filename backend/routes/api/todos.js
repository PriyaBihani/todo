const express = require("express");
const Todo = require("../../models/todo");
const { authMiddleware } = require("../../middlewares");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.userId });

    res.status(200).json({
      status: "success",
      msg: "Todos retrieved successfully",
      data: todos,
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
    const newTodo = new Todo({
      title: req.body.title,
      completed: false,
      userId: req.userId,
    });

    await newTodo.save();

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
    const { id } = req.params;

    const doesTodoExist = await Todo.exists({ _id: id });

    if (!doesTodoExist) {
      return res.status(404).json({
        status: "error",
        msg: "Todo not found",
        data: null,
      });
    }

    const updatedData = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });

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
    const { id } = req.params;

    const doesTodoExist = await Todo.exists({ _id: id });

    if (!doesTodoExist) {
      return res.status(404).json({
        status: "error",
        msg: "Todo not found",
        data: null,
      });
    }

    await Todo.findByIdAndDelete(id);

    res.status(200).json({
      status: "success",
      msg: "Todo deleted successfully",
      data: null,
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
