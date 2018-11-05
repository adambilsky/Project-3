const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
   schoolName: { type: String, required: true },
   schoolCity: { type: String, required: true },
   adminFirstName: { type: String, required: true },
   adminLastName: { type: String, required: true },
   adminEmail: { type: String, required: true },
   adminPhone: String,
   degree1: String,
   degree2: String,
   degree3: String,
   URL: String,
   image: String,
   bio: String

});

const School = mongoose.model("School", schoolSchema);

module.exports = School;