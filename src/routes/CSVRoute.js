const express = require("express");

const CSVRouter = express.Router();
const { AddCSV } = require("../controllers/CSVController");

CSVRouter.get("/addCSV", AddCSV);

module.exports = CSVRouter;
