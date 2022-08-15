const express = require("express");
const { AddCollege } = require("../controllers/CollegeController");

const CollegeRouter = express.Router();

CollegeRouter.post("/addCollege", AddCollege);

module.exports = CollegeRouter;
