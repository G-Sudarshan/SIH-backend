const express = require("express");
const {
  sendSMS
} = require("../controllers/SMSController");

const SMSRouter = express.Router();

SMSRouter.get("/send_sms", sendSMS);

module.exports = SMSRouter;
