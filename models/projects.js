const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true },
    createdBy: { type: String, required: true },
    // director: { type: String, required: true },
    description: String,
    link: String,
    year: String
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
