const mongoose = require("mongoose");

const CSVSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNum: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    enum: ["Startup", "Fintech", "Product", "Consultant"],
    required: true,
  },
  ctcOfferred: {
    type: Number,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Employed", "Unemployed", "Higher Studies"],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CSV", CSVSchema);
