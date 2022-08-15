const mongoose = require("mongoose");

const ReasonSchema = new mongoose.Schema({

    college_id: {
      type: Number,
      required: true,
    },

    resons: [String],

    year:{
        type: Number,
        required: true,
    }

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reason", ReasonSchema);