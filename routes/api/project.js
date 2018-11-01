const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/projects"
router.route("/")
  .get(projectController.findAll)
  .post(projectController.create);

// Matches with "/api/projects/:school"
// router
//   .route("/:school")
//   .get(projectController.findBySchool);

// // Matches with "/api/projects/:user"
// router
//   .route("/:user")
//   .get(projectController.findByUser);

// Matches with "/api/projects/:id"
router
  .route("/:id")
  .get(projectController.findProjects)
  .put(projectController.update)
  .delete(projectController.remove);

module.exports = router;