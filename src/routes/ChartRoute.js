const express = require("express");
const ChartRouter = express.Router();
const {
  PlacedUnplacedGraph,
  programWisePlacement,
  stateWisePlacement,
  institutionTypeWisePlacement,
  categoryWiseEnrollment,
  yearWisePlacement,
} = require("../controllers/ChartController");

ChartRouter.get("/placedUnplacedGraph/:id", PlacedUnplacedGraph);
ChartRouter.get("/programWisePlacement", programWisePlacement);
ChartRouter.get("/stateWisePlacement", stateWisePlacement);
ChartRouter.get("/institutionTypeWisePlacement", institutionTypeWisePlacement);
ChartRouter.get("/categoryWiseEnrollment", categoryWiseEnrollment);
ChartRouter.get("/yearWisePlacement", yearWisePlacement);
module.exports = ChartRouter;
