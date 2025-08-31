const Task = require("../models/taskModel");
//Express async handler is an advanced version where it automatically handles async promises (resolve,reject)
const asyncHandler = require("express-async-handler");

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
    // res.status(200).json({ status:true,data:{tasks,amount:tasks.length}} );
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res
        .status(404)
        .json({ msg: `No Task with the provided id in DB: ${req.params.id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const updateTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndUpdate(taskId, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    res.status(404).json("No task is present with the given id");
  }
  res.status(200).json({ task });
};

const deleteTask = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndDelete(taskId);
  if (!task) {
    res.status(404).json("No task is present with the given id ");
  }
  res.status(200).json({ msg: "Task deleted successfully" });
});

module.exports = {
  getAllTask,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
