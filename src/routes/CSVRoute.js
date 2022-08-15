const express = require("express");

const CSVRouter = express.Router();
const { AddUser } = require("../controllers/CSVController");

CSVRouter.get("/addCSV", AddUser);

module.exports = CSVRouter;
