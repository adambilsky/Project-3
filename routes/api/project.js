const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/projects"
// gets ALL projects
router.route("/")
  .get(projectController.findAll)
  .post(projectController.create);

// Matches with "/api/projects/:school"
// router
//   .route("/:school")
//   .get(projectController.findBySchool);

// Matches with "/api/projects/:id"
// Gets projects by id (this is the function we've been advised to use a query string)

router
  .route("/:id")
  .get(projectController.findById)
  .put(projectController.update)
  .delete(projectController.remove);

  // Matches with "/api/projects/student/:id"

router
  .route("/project/:id")
  .get(projectController.findById);
  
router 
  .route("/student/:id")
  .get(projectController.findCreator);

router
  .route("/users/:id")
  .get(projectController.findProjectUsers);

module.exports = router;