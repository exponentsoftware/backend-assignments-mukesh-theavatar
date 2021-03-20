const mongoose = require("../database/mongoose");
const Task = require("../models/todo");

const addTask = async (req, res) => {
  try {
    const { username, title, category } = req.body;
    let task = new Task({
      username,
      title,
      category,
      status,
    });
    let result = await task.save();
    return res.status(200).send({
      message: "Your Task Created Successfully",
      data: result,
    });
  } catch (error) {
    console.log("Error in MongoDB:" + error);
    return res.status(500).send({
      message:
        "We received some error while creating your task, please try again",
    });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    let id = req.params.id;
    await Task.findByIdAndDelete(id);
    return res.status(200).send("deleted successfully");
  } catch (error) {
    return res.status(500).send("error deleting");
  }
};

const getTaskById = async (req, res) => {
  try {
    let queryObject = {};
    const { id, title, category } = req.params;
    if (!title) {
      return res.status(400).send({ message: "Enter the Title." });
    }
    queryObject.id = id;
    if (title) {
      queryObject.title = title;
    }
    if (category) {
      queryObject.category = category;
    }
    //console.log(req.params, "REQ PARAMS");
    //let id = req.params.id;

    let task = await Task.findOne(queryObject);
    if (!task) {
      return res.status(400).send({
        message: "No any task found",
      });
    } else {
      return res.status(200).send({
        message: "Your Task fetched successfully",
        data: task,
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Something went wrong, please try again",
    });
  }
};

const getAllTasks = async (req, res) => {
  try {
    let tasks = await Task.find();
    if (!tasks.length) {
      return res.status(400).send({
        message: "No any task found",
      });
    } else {
      return res.status(400).send({
        message: "Your Task fetched Successfully",
        data: tasks,
      });
    }
  } catch (error) {
    return res.status(500).send({
      message:
        "We encountered some error while fetching data for you, please try again",
    });
  }
};
module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  deleteTaskById,
};
