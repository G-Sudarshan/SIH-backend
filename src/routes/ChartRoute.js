const express = require("express");
const ChartRouter = express.Router();
const {
  PlacedUnplacedGraph,
  programWisePlacement,
} = require("../controllers/ChartController");

ChartRouter.get("/placedUnplacedGraph/:id", PlacedUnplacedGraph);
ChartRouter.get("/programWisePlacement", programWisePlacement);

module.exports = ChartRouter;
