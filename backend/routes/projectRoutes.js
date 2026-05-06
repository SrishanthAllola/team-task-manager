const router = require("express").Router();

const Project = require("../models/Project");



// CREATE PROJECT
router.post("/", async (req, res) => {

  try {

    const project = new Project(req.body);

    await project.save();

    res.status(201).json({
      message: "Project Created",
      project
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});



// GET ALL PROJECTS
router.get("/", async (req, res) => {

  try {

    const projects = await Project.find();

    res.status(200).json(projects);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});



// DELETE PROJECT
router.delete("/:id", async (req, res) => {

  try {

    await Project.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Project Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});



module.exports = router;