const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
    {
        userName: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        schoolName: { type: String, required: true },
        schoolId: String,
        schoolValid: { type: Boolean, default: false },
        degree: String,
        concentration: String,
        city: String, // this could be updated to distinguish current residence from school location
        email: { type: String, required: true },
        mobile: String,


    /*  This is a list of all possible roles the user has filled.
        They will be used with checkboxes. 
        A separate object will hold the resume.
        UPDATE: see the item "resume" at line 106, it now contains
        an array of all projectSchema-created objects from the constructor above. */

    positionExp: {
        type: [Number],
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
            value: "Screenwriter",
            type: Boolean,
            default: false
        },
        /*  Note: The terms "Director of Photography" and "Cinematographer" 
            are interchangeable, so if we utilize a search box, we may want to consider
            how to tell the search function (Boolean || ?) that one user-input value
            is the same as the other*/
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
    bio: String,
    profileImg: String,
    dateJoined: { type: Date, default: Date.now }

});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
