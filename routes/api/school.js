const router = require("express").Router();
const schoolController = require("../../controllers/schoolController");
const studentController = require("../../controllers/studentController");

// Matches with "/api/schools"
router.route("/")
  .get(schoolController.findAll)
  .post(schoolController.create);

router.route("/name/:name")
  .get(schoolController.findByName);

// Matches with "api/schools/students/"
router.route("/students/:id")
    .get(studentController.findBySchool);

// Matches with "api/schools/schoolname/:id"
router.route("/schoolName/:id")
  .get(schoolController.findSchoolName);
  console.log("find schoolId by schoolName route hit!");


// Matches with "/api/schools/:id"
router
  .route("/:id")
  .get(schoolController.findById)
  .put(schoolController.update)
  .delete(schoolController.remove);

module.exports = router;