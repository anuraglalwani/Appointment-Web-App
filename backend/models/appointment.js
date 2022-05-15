const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
   doctor: {
    type: String,
    required: true,
  },
   description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  }
});
const Appointment = mongoose.model("appointment", appointmentSchema);
module.exports = Appointment;
