const router = require("express").Router();

const studentRoutes = require("./student");
const schoolRoutes = require("./school");
const projectRoutes = require("./project")

// Student routes
router.use("/students", studentRoutes);

// School routes
router.use("/schools", schoolRoutes);

// Project routes
router.use("/projects", projectRoutes)

module.exports = router;