const {
  getAllStudentsByYearAndBranch,
} = require("../controllers/StudentController");
const express = require("express");
const StudentRouter = express.Router();

StudentRouter.post(
  "/getAllStudentsByYearAndBranch",
  getAllStudentsByYearAndBranch
);

module.exports = StudentRouter;
