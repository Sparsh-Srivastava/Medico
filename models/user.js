const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  medDetailes: { 
    type: Schema.Types.ObjectId, 
    ref: 'med' 
  },
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
  medicalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "meds",
  },
  city: {
    type: String,
    required: true,
  },
  yourMessages: [
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

  doctorMessages: [
    {
      doctorId: {
        type: String,
      },
      reply: {
        type: String,
      },
      date: {
        type: Date,
      },
    },
  ],
});
module.exports = User = mongoose.model("users", UserSchema);
