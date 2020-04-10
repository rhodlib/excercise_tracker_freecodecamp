//Imports
const { Router } = require("express");
const router = Router();
const { saveUser } = require("../controllers/user.controller");
const {
  searchExerciseUser,
  addExcerciseUser,
} = require("../controllers/excerciseUser.controller");

//Routes

router.post("/api/exercise/new-user", saveUser);

router.post("/api/exercise/add", addExcerciseUser);

router.get("/api/exercise/log", searchExerciseUser);

module.exports = router;
