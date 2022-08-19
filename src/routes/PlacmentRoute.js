const express = require("express");
const PlacmentRouter = express.Router();
const { addPlacementRecords } = require("../controllers/PlacementController");

PlacmentRouter.post("/addPlacementRecords", addPlacementRecords);

module.exports = PlacmentRouter;
