const router = require("express").Router();




// Dependencies
const studentRoutes = require("./student");

// const schoolRoutes = require("./school");

module.exports = function(app) {

    // Get all student data
    app.get("/api/all", function (req, res) {
        studentRoutes.findAll({}).then(function (results) {
            res.json(results);
        }
        )
    }

    )

//Get a specific student profile
app.get("/api/:student", function(req, res) {
    Student.findAll({
        where: {
            id: req.params.student
        }
    }).then(function(results) {
        res.json(results);

    });

});

// Add a student profile
app.post("/app/new", function (req, res) {
    console.log("student profile data")
    console.log(req.body);
    Student.create({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        schoolName: req.body.schoolName,
        schoolValid: req.body.schoolValid,
        degree: req.body.degree,
        concentration: req.body.concentration,
        city: req.body.city,
        contactInfo: req.body.contactInfo,
        email: req.body.email,
        mobile: req.body.mobile
    });


});

}


// Student routes
// router.use("/student", studentRoutes);

// School routes
// router.use("/school", schoolRoutes);

// module.exports = router;



// ERROR message
// ENOENT (No such file or directory): Commonly raised by fs operations to indicate that a component of the specified pathname does not exist 
// — no entity (file or directory) could be found by the given path.