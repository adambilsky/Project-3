const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// ------------------------------------------------ 
// Get ALL projects
// Matches with "/api/projects"
router.route("/")
  .get(projectController.findAll)
  .post(projectController.create);

// ------------------------------------------------ 
/*  This route would return all projects from a particular school,
    Seems to be a route we wanted, not sure why it is currently commented out,
    Matches with "/api/projects/school/:school"*/
 router
  .route("/school/:id")
  .get(projectController.findBySchool); 

// ------------------------------------------------ 
//  Get projects by PROJECT id (this is the function we've been advised to use a query string)
//  Matches with "/api/projects/:id"

router
  .route("/:id")
  .get(projectController.findById)
  .put(projectController.update)
  .delete(projectController.remove);

// ------------------------------------------------ 
//  Get projects CREATED (submitted) by STUDENT id, 
//  Matches with "/api/projects/student/:id"
router 
  .route("/student/:id")
  .get(projectController.findCreator);


// ------------------------------------------------ 
/*  Get all USER Ids BELONGING to a PROJECT id, 
    from the 'Users' array in a project document 
    **** THIS IS A VERY IMPORTANT ROUTE! */
//  Matches "/api/projects/users/"
router
  .route("/users/:id")
  .get(projectController.findProjectUsers);


// ------------------------------------------------ 
/*  this route appears to match "/api/projects/project/", 
    but not sure how it is to be used. */
// router
//   .route("/project/:id")
//   .get(projectController.findById);


module.exports = router;