const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const MedSchema = new Schema({
  name: {
    type: String,
    required: true,
    ref: 'User'
  },
  email: {
    type: String,
    required: true,
    ref: 'User'
  },
  phone: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true,
    ref: 'User'
  },
  blood: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  desciption: {
    type: String,
    required: true
  },
  emergencyname: {
    type: String,
    required: true
  },
  emergencynum: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
});

module.exports = Med = mongoose.model("meds", MedSchema);