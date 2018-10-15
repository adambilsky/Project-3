const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    userName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    schoolName: { type: String, required: true },
    schoolValid: { type: Boolean, default: false },
    degree: String,
    concentration: String,
    city: { type: String, required: true }, // this could be updated to distinguish current residence from school location
    contactInfo: {
        email: { type: String, required: true },
        mobile: String,
        // more methods may be added, such as instagram, facebook, etc
    },

    // This is a list of all possible roles the user has filled.
    // They will be used with checkboxes. A separate object will hold the resume.
    positionExp: {
        producer: {
            value: "Producer",
            type: Boolean,
            default: false
        },
        director: {
            value: "Director",
            type: Boolean,
            default: false
        },
        writer: {
            value: "Writer",
            type: Boolean,
            default: false
        },
        dp: {
            value: "Director of Photography",
            type: Boolean,
            default: false
        },
        camOp: {
            value: "Camera Operator",
            type: Boolean,
            default: false
        },
        dit: {
            value: "DIT",
            type: Boolean,
            default: false
        },
        gaffer: {
            value: "Gaffer",
            type: Boolean,
            default: false
        },
        prodDes: {
            value: "Production Designer",
            type: Boolean,
            default: false
        },
        props: {
            value: "Prop Master",
            type: Boolean,
            default: false
        },
        prodAsst: {
            value: "Production Assistant",
            type: Boolean,
            default: false
        },
        hairMakeup: {
            value: "Hair & Makeup",
            type: Boolean,
            default: false
        },
        locationMgr: {
            value: "Locations Manager",
            type: Boolean,
            default: false
        },

    },
    resume: {
        project1: {
            title: { type: String, required: true },
            // director: { type: String, required: true },
            year: { type: String, required: true },
            genre: String,
            awards: String,
            role1: { type: String, required: true },
            role2: String,
            role3: String,
            role4: String
        },
        project2: {
            title: { type: String, required: true },
            // director: { type: String, required: true },
            year: { type: String, required: true },
            genre: String,
            awards: String,
            role1: { type: String, required: true },
            role2: String,
            role3: String,
            role4: String
        },
        project3: {
            title: { type: String, required: true },
            // director: { type: String, required: true },
            year: { type: String, required: true },
            genre: String,
            awards: String,
            role1: { type: String, required: true },
            role2: String,
            role3: String,
            role4: String
        },
        project4: {
            title: { type: String, required: true },
            // director: { type: String, required: true },
            year: { type: String, required: true },
            genre: String,
            awards: String,
            role1: { type: String, required: true },
            role2: String,
            role3: String,
            role4: String
        },
        project5: {
            title: { type: String, required: true },
            // director: { type: String, required: true },
            year: { type: String, required: true },
            genre: String,
            awards: String,
            role1: { type: String, required: true },
            role2: String,
            role3: String,
            role4: String
        }
        /* we need to determine whether the above syntax will force us to
        add projects because one object within the project contains a requirement,
        or whether fields are only required if the object isn't empty.

        we can add a method to create additional projects here if necessary*/
    },
    bio: String,
    profileImg: Image,
    dateJoined: { type: Date, default: Date.now }

});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
