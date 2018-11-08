const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    school: { type: Schema.Types.ObjectId, ref: 'School', required: true },
    description: String,
    link: String,
    image: String,
    yearCreated: String,
    dateAdded: { type: Date, default: Date.now },
    users: [{ userId: { type: Schema.Types.ObjectId, ref: 'Student' }, roles: [String] }
] 

});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
