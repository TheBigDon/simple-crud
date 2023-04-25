const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gradebook: {
    type: String,
    required: true,
    unique: true,
  },
  registration: {
    type: String,
    required: true,
    unique: true,
  },
  subjects: {
    type: [String],
    required: true,
  },
  registered_on: {
    type: Date,
    default: new Date(),
  },
});

const studentModel = mongoose.model("studentModel", studentSchema);
module.exports = studentModel;
