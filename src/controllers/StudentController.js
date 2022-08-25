const CSV = require("../models/CSV");

const getAllStudentsByYearAndBranch = async (req, res) => {
  const reqParams = req.body;
  let { year, branch } = reqParams;
  let students;
  try {
    if (year !== "" && branch !== "") {
      students = await CSV.find({ year: year, branch: branch });
    } else if (year !== "") {
      students = await CSV.find({ year: year });
    } else if (branch !== "") {
      students = await CSV.find({ branch: branch });
    } else {
      students = await CSV.find();
    }

    // const students = await CSV.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllStudentsByYearAndBranch };
