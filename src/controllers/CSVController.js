const csvToJson = require("csvtojson");
const CSV = require("../models/CSV");

const AddCSV = async (req, res) => {
  try {
    const jsonArray = await csvToJson().fromFile(
      `${__dirname}/./placement_data.csv`
    );

    for (let index = 0; index < jsonArray.length; index++) {
      if (jsonArray[index].minority === "Yes") {
        jsonArray[index].minority = true;
      } else {
        jsonArray[index].minority = false;
      }
      jsonArray[index].ctcOffered = parseFloat(jsonArray[index].ctcOffered);

      jsonArray[index].collegeId = "62fa2a7cfa0d385762e2948c";
      jsonArray[index].year = 2022;
      jsonArray[index].state = "Maharashtra";
      jsonArray[index].institutionType = "Private";
    }
    const records = await CSV.insertMany(jsonArray);

    res.status(200).json({
      status: 200,
      message: "Placement data inserted Successfully !",
      body: {
        records,
      },
    });
    res.json(jsonArray);
  } catch (error) {
    console.log({ Error: error });
  }
};

module.exports = { AddCSV };
