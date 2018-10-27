const router = require("express").Router();


// Dependencies


const studentRoutes = require("./student");

const schoolRoutes = require("./school");

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
            _id: req.params.student
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
        // do we need this contactInfo line?
        contactInfo: req.body.contactInfo,
        email: req.body.email,
        mobile: req.body.mobile
    });


});

}


// Student routes

router.use("/students", studentRoutes);

// School routes
router.use("/schools", schoolRoutes);
=======

// router.use("/student", studentRoutes);

// School routes
// router.use("/school", schoolRoutes);

// module.exports = router;


