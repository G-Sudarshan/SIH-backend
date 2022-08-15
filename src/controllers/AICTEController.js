const { response } = require("express");
const College = require("../models/College");

const GetReasons = async (req, res) => {

    try{
        const reasons = await College.find({ },{"reasons": 1});

        res.status(200).json(reasons);
    }catch (error) {
    res.status(500).json({ Error: error });
  }


}

module.exports = { GetReasons };
