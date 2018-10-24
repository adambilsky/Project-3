const router = require("express").Router();

const studentRoutes = require("./student");
const schoolRoutes = require("./school");

// Student routes
router.use("/students", studentRoutes);

// School routes
router.use("/school", schoolRoutes);

module.exports = router;