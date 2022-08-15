const csvToJson = require("csvtojson");

const AddUser = async (req, res) => {
  try {
    const jsonArray = await csvToJson().fromFile("sample.csv");
    console.log(jsonArray);
    res.json({ message: "Hello" });
  } catch (error) {
    console.log({ Error: error });
  }
};

module.exports = { AddUser };
