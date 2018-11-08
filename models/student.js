const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
    {
        userName: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        schoolName: { type: String, required: true },
        schoolId: { type: Schema.Types.ObjectId, ref: 'School' },
        schoolValid: { type: Boolean, default: false },
        projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
        degree: String,
        concentration: String,
        city: String, // this could be updated to distinguish current residence from school location
        email: { type: String, required: true },
        mobile: String,
        bio: String,
        profileImg: String,
        dateJoined: { type: Date, default: Date.now }

    });

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
