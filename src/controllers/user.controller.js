//Imports
const User = require("../models/User");

const userController = {};

userController.saveUser = (req, res) => {
  const username = req.body.username;

  User.find({ username }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      if (!data.length) {
        User.create({ username }, (err, data) => {
          if (err) {
            res.send(err);
          } else {
            res.json(data);
          }
        });
      } else {
        res.send({ error: "User already taken" });
      }
    }
  });
};

module.exports = userController;
