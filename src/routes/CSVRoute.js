const express = require("express");

const CSVRouter = express.Router();
const { AddCSV, AddPlacementData } = require("../controllers/CSVController");

CSVRouter.get("/addCSV", AddCSV);
CSVRouter.get("/addPlacementData", AddPlacementData);

module.exports = CSVRouter;
