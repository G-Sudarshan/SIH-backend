const express = require("express");
const { GetReasons } = require("../controllers/AICTEController")

const AICTERouter = express.Router();

AICTERouter.get("/getReasons", GetReasons);

module.exports = AICTERouter;
