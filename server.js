// Require necessary NPM Packages
const express = require("express");
const mongoose = require("mongoose");
const { Workout, Exercise } = require("./models/workout");
const workoutSeedData = require('./seedData/workoutSeed');
const userSeedData = require("./seedData/userSeed");

const app = express();

// Require DB Configuration File
const db = require("./config/db");

// Connect to MongoDB database
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => console.log("Connection to MongoDB"));

// Require Route Files
const indexRouter = require("./routes/index");
const User = require("./models/user");

// Routes
// Mount imported Routers
app.use(indexRouter);

const port = process.env.PORT || 5001;

const squat = {
  name: "Squat",
  weight: 10,
  reps: 10,
};

// Exercise.create(squat, (err, exercise) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("added provided exercise data", exercise);
//   }
//   mongoose.connection.close();
// });

const mondayWorkout = {
  startDate: new Date(2000, 01, 12, 14, 33, 12),
  completed: true,
  exercises: [],
};

mondayWorkout.exercises.push(squat);

const user1 = {
  firstName: "usman",
  lastName: "bashir",
  username: "usbashir",
  password: "hfghghg",
};

// User.create(user1, (err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("added provided exercise data", user);
//   }
//   mongoose.connection.close();
// });

// Workout.create(mondayWorkout, (err, workout) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("added provided exercise data", workout);
//   }
//   mongoose.connection.close();
// });

// Workout.insertMany(workoutSeedData, (err, workouts) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added workout seed data', workouts);
//   mongoose.connection.close();
// });

// User.insertMany(userSeedData, (err, users) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added user seed data', users);
//   mongoose.connection.close();
// });

// Returns a statement saying the App is listening on our specified port
app.listen(port, () => console.log(`App is listening on port ${port}`));
