const {
  getAllStudentsByYearAndBranch,
} = require("../controllers/StudentController");
const express = require("express");
const StudentRouter = express.Router();

StudentRouter.get(
  "/getAllStudentsByYearAndBranch",
  getAllStudentsByYearAndBranch
);

module.exports = StudentRouter;
