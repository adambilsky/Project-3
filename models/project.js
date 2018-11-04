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
    users: [
        { String, [String] }
    ] 
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
