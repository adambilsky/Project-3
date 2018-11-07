const router = require("express").Router();

const projectRoutes = require("./project")
const schoolRoutes = require("./school");
const studentRoutes = require("./student");

// Project routes ("/api/projects/")
router.use("/projects", projectRoutes)

// School routes ("/api/schools/")
router.use("/schools", schoolRoutes);

// Student routes ("/api/students/")
router.use("/students", studentRoutes);

module.exports = router;