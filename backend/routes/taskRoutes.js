const router = require("express").Router();

const Task = require("../models/Task");



// CREATE TASK
router.post("/", async (req, res) => {

  try {

    const task = new Task(req.body);

    await task.save();

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});



// GET ALL TASKS
router.get("/", async (req, res) => {

  try {

    const tasks = await Task.find();

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});



// UPDATE TASK STATUS
router.put("/:id", async (req, res) => {

  try {

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedTask);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});



// DELETE TASK
router.delete("/:id", async (req, res) => {

  try {

    await Task.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Task Deleted"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});



module.exports = router;