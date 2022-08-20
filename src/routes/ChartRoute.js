const express = require("express");
const ChartRouter = express.Router();
const {
  PlacedUnplacedGraph,
  programWisePlacement,
  stateWisePlacement,
  institutionTypeWisePlacement,

} = require("../controllers/ChartController");

ChartRouter.get("/placedUnplacedGraph/:id", PlacedUnplacedGraph);
ChartRouter.get("/programWisePlacement", programWisePlacement);
ChartRouter.get("/stateWisePlacement", stateWisePlacement);
ChartRouter.get("/institutionTypeWisePlacement", institutionTypeWisePlacement);
module.exports = ChartRouter;
