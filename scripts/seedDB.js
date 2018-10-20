const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Student collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/imdbu"//Update with IMDBU Mongodb

  );

  const studentSeed = [
      {
        userName: "Super8isGreat",
        firstName: "Steven",
        lastName: "Spielberg",
        schoolName: "USC",
        schoolValid: True,
        degree: "MFA",
        concentration: "Directing",
        city: "Los Angeles", // this could be updated to distinguish current residence from school location
        contactInfo: {
            email: "steve@jaws.net",
            mobile: "800-555-5297",
            // more methods may be added, such as instagram, facebook, etc
        },
    
        // This is a list of all possible roles the user has filled.
        // They will be used with checkboxes. A separate object will hold the resume.
        positionExp: {
            producer: {
                name: "Producer",
                value: true,
                type: Boolean,
                default: false
            },
            director: {
                name: "Director",
                value: true,
                type: Boolean,
                default: false
            },
            writer: {
                name: "Writer",
                value: true,
                type: Boolean,
                default: false
            },
            dp: {
                name: "Director of Photography",
                value: false,
                type: Boolean,
                default: false
            },
            camOp: {
                name: "Camera Operator",
                value: "",
                type: Boolean,
                default: false
            },
            dit: {
                name: "DIT",
                value: "",
                type: Boolean,
                default: false
            },
            gaffer: {
                name: "Gaffer",
                value: "",
                type: Boolean,
                default: false
            },
            prodDes: {
                name: "Production Designer",
                value: "",
                type: Boolean,
                default: false
            },
            props: {
                name: "Prop Master",
                value: "",
                type: Boolean,
                default: false
            },
            prodAsst: {
                name: "Production Assistant",
                value: "",
                type: Boolean,
                default: false
            },
            hairMakeup: {
                name: "Hair & Makeup",
                value: "",
                type: Boolean,
                default: false
            },
            locationMgr: {
                name: "Locations Manager",
                value: "",
                type: Boolean,
                default: false
            },
    
        },
        resume: {
            project1: {
                title: "Baby Shark",
                // director: ,
                year: "1975",
                genre: "Horror",
                awards: "",
                role1: "Writer",
                role2: "Director",
                role3: "Producer",
                role4: ""
            },
            project2: {
                title: "Raiders of the Last Clark",
                year: "1973",
                genre: "Comedy",
                awards: "Student Academy Award",
                role1: "Writer",
                role2: "Director",
                role3: "",
                role4: ""
            },
            project3: {
                title: "",
                year: "",
                genre: "",
                awards: "",
                role1: "",
                role2: "",
                role3: "",
                role4: ""
            },
            project4: {
                title: "",
                // director: "",
                year: "",
                genre: "",
                awards: "",
                role1: "",
                role2: "",
                role3: "",
                role4: ""
            },
            project5: {
                title: "",
                // director: "",
                year: "",
                genre: "",
                awards: "",
                role1: "",
                role2: "",
                role3: "",
                role4: ""
            }
            /* we need to determine whether the above syntax will force us to
            add projects because one object within the project contains a requirement,
            or whether fields are only required if the object isn't empty.
    
            we can add a method to create additional projects here if necessary*/
        },
        bio: "Steve was born in 1945 in Fresno, and began making movies when he was 7, with little flipbooks.",
        profileImg: Image,
        dateJoined: new Date(Date.now())
    }
  ];

  db.Student
  .remove({})
  .then(() => db.Student.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
