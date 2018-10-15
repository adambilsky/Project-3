const router = require("express").Router();
const schoolController = require("../../controllers/schoolController");

// Matches with "/api/school"
router.route("/")
  .get(schoolController.findAll)
  .post(schoolController.create);

// Matches with "/api/school/:id"
router
  .route("/:id")
  .get(schoolController.findById)
  .put(schoolController.update)
  .delete(schoolController.remove);

module.exports = router;