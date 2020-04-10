//Imports
const mongoose = require("mongoose");

//MongoDB url
const uri = process.env.MLAB_URI || 'mongodb://localhost/exercise-track';

//Mongoose connect config
mongoose.connect(uri);

//Mongoose success/error notifications
mongoose.connection.once("open", () => {
  console.log(`Database is connected to`, uri);
});

mongoose.connection.on("error", err => {
  console.log(`Error: ${err}`);
});