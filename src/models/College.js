const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    aicte_code: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    isMinority: {
      type: Boolean,
      required: true,
    },
    instutionType: {
      type: String,
      required: true,
    },
    intakeCount: {
      type: Number,
      required: true,
    },
    isWomen: {
      type: Boolean,
      required: true,
      default: false,
    },
    program: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("College", CollegeSchema);
