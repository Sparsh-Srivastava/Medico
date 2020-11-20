const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const DocSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: false,
  },
  special: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  patientMessages: [
    {
      doctorId: {
        type: String,
      },
      patientId: {
        type: String,
      },
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      description: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
      },
    },
  ],
});

module.exports = Doc = mongoose.model("docs", DocSchema);
