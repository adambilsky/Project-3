const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
   schoolName: { type: String, required: true },
   schoolCity: { type: String, required: true },
   adminContact: {
       firstName: { type: String, required: true },
       lastName: { type: String, required: true },
       email: { type: String, required: true }
   },
   degrees: {
       degree1: String,
       degree2: String,
       degree3: String
   },
   bio: String,

});

const School = mongoose.model("School", schoolSchema);

module.exports = School;