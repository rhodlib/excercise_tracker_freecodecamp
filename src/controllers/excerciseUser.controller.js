//Imports
const ExcerciseUser = require("../models/ExerciseUser");
const User = require("../models/User");

const ExcerciseUserController = {};

ExcerciseUserController.addExcerciseUser = (req, res) => {
  const { userId, description } = req.body;
  const duration = parseInt(req.body.duration);
  const date = new Date(req.body.date).getTime();

  User.findById(userId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const excercise = { user: data.id, description, duration, date };
      ExcerciseUser.create(excercise, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.json(data);
        }
      });
    }
  });
};

ExcerciseUserController.searchExerciseUser = (req, res) => {
  const user = req.query.userId;
  const from = new Date(req.query.from).getTime() - 1 || 0;
  const to = new Date(req.query.to).getTime() + 1 || new Date().getTime() + 1;
  const limit = parseInt(req.query.limit);

  ExcerciseUser.find({ user, date: { $gt: from, $lt: to } })
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        res.send(err);
      } else {
        if (!data.length) {
          res.send("Username Invalid");
        } else {
          res.json(data);
        }
      }
    });
};

module.exports = ExcerciseUserController;
