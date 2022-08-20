const express = require("express");
const PlacmentRouter = express.Router();
const {
  addPlacementRecords,
  deleteAllRecords,
} = require("../controllers/PlacementController");

PlacmentRouter.post("/addPlacementRecords", addPlacementRecords);
PlacmentRouter.delete("/deleteAllRecords", deleteAllRecords);

module.exports = PlacmentRouter;
