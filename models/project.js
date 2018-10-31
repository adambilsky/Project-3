const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true },
    createdBy: { type: String, required: true },
    school: { type: String, required: true },
    description: String,
    link: String,
    image: String,
    yearCreated: String,
    dateAdded: { type: Date, default: Date.now },
    users: [String] /* <-- this is the array the API get route must search to find whether a student has a project to list on a profile */
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
