const mongoose = require("mongoose");

const CSVRow = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  emailID: {
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
    enum: ["Startup", "Fintech", "Product", "Consultant", "Other"],
    required: true,
  },
  ctcOffered: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  minority: {
    type: Boolean,
    required: true,
  },
  program: {
    type: String,
    enum: [
      "Engineering and Technology",
      "Applied arts and crafts",
      "Architecture",
      "Town planning",
      "Hotel management and catering",
      "Management",
      "MCA",
      "Pharmacy",
    ],
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Employed", "Unemployed", "Higher studies"],
    required: true,
  },
  category: {
    type: String,
    enum: ["Open", "OBC", "SC", "ST", "Other"],
    required: true,
  },
});

const CSVSchema = new mongoose.Schema({
  collegeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
  },
  placementData: [CSVRow],
  year: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("CSV", CSVSchema);
