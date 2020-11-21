const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const MedSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  phone: {
    type: Number,
    // required: true,
  },
  age: {
    type: Number,
    // required: true,
  },
  dob: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    // required: true,
  },
  blood: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  desciption: {
    type: String,
    // required: true,
  },
  emergencyname: {
    type: String,
    // required: true,
  },
  emergencynum: {
    type: Number,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
});

module.exports = Med = mongoose.model("meds", MedSchema);
