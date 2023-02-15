const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    weight: { type: Number, required: true },
    reps: { type: Number, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const workoutSchema = new mongoose.Schema(
  {
    startDate: String,
    completed: { type: Boolean, default: false },
    exercises: [exerciseSchema],
  },
  { timestamps: true }
);

// Compile our Model based on the Schema
const Workout = mongoose.model("Workout", workoutSchema);
const Exercise = mongoose.model("Exercise", exerciseSchema);

// Export our Model for use
module.exports = { Workout, Exercise };
