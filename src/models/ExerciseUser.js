//Imports
const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
  },
});

const ExerciseUser = mongoose.model("Exercise", exerciseSchema);

module.exports = ExerciseUser;
