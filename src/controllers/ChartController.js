
const Placement = require("../models/Placement");

const PlacedUnplacedGraph = async (req, res) => {
  const collegeId = req.params.id;
  let responseObj = {
    placedStudentCount: 0,
    unplacedStudentCount: 0,
    malePlacedStudentCount: 0,
    femalePlacedStudentCount: 0,
    maleUnplacedStudentCount: 0,
    femaleUnplacedStudentCount: 0,
  };
  try {
    const response = await Placement.find(
      { collegeId },
      {
        _id: 0,
        placedStudentCount: 1,
        unplacedStudentCount: 1,
        malePlacedStudentCount: 1,
        femalePlacedStudentCount: 1,
        maleUnplacedStudentCount: 1,
        femaleUnplacedStudentCount: 1,
      }
    );

    for (let i = 0; i < response.length; i++) {
      responseObj.placedStudentCount += response[i].placedStudentCount;
      responseObj.unplacedStudentCount += response[i].unplacedStudentCount;
      responseObj.malePlacedStudentCount += response[i].malePlacedStudentCount;
      responseObj.maleUnplacedStudentCount +=
        response[i].maleUnplacedStudentCount;
      responseObj.femalePlacedStudentCount +=
        response[i].femalePlacedStudentCount;
      responseObj.femaleUnplacedStudentCount +=
        response[i].femaleUnplacedStudentCount;
    }
    res.status(200).json(responseObj);
  } catch (error) {
    res.status(500).json(error);
  }
};

const programWisePlacement = async (req, res) => {
  const reqParams = req.body;

  let { year, gender, state, institutionType, minority } = reqParams;
  //const { year,  program } = reqParams;
  
  try {
    let count;
    if(state === "")
      {
       
        state = await Placement.distinct("state");
        console.log(state);
      }
      else
      {
         let temp = state;
         state = [];
         state.push(temp);
      }
    if(institutionType === "")
      {
        
        institutionType = await Placement.distinct("institutionType");
        console.log(institutionType);
      }
      else
      {
        let temp = institutionType;
        institutionType = [];
        institutionType.push(temp);
      }
      
      if(year === "")
      {
        
        year = await Placement.distinct("year");
        console.log(year);
      }
      else
      {
        let temp = year;
        year = [];
        year.push(temp);
      }
    
    console.log(year,gender,state, institutionType,minority);
    //console.log(year,program);
    if (year === "" && gender ==="" && state === "" && institutionType ==="" && minority === "" ) {
      count = await Placement.aggregate([
        {
          $group: {
            _id: "$program",
            placedStudentCount: { $sum: "$placedStudentCount" },
            unplacedStudentCount: { $sum: "$unplacedStudentCount" },
          },
        },
      ]);
    } 
    else if(gender !== "")
    {
      //console.log("In else if gender");
       count = await Placement.aggregate([
        {
          $match: {
            $and: [{year: { $in: year}}, {state: { $in: state}}, {institutionType: { $in: institutionType}}],
          },
        },
        {
          $group: {
            _id: "$program",
            placedStudentCount: { $sum: "$femalePlacedStudentCount" },
            unplacedStudentCount: { $sum: "$femaleUnplacedStudentCount" },
          },
         
        },
      ]);
      
    }
    else if(minority !== "" )
    {
      //console.log("In else if minority");
      count = await Placement.aggregate([
        {
          $match: {
            $and: [{year: { $in: year}}, {state: { $in: state}}, {institutionType: { $in: institutionType}}],
          },
        },
        {
          $group: {
            _id: "$program",
            placedStudentCount: { $sum: "$minorityCountPlaced" },
            unplacedStudentCount: { $sum: "$minorityCountUnplaced" },
          },
        },
      ]);
    }
   
   else {
    //console.log("In else ");
      count = await Placement.aggregate([
        {
          $match: {
            $and: [{year: { $in: year}}, {state: { $in: state}}, {institutionType: { $in: institutionType}}],
          },
        },
        {
          $group: {
            _id: "$program",
            placedStudentCount: { $sum: "$placedStudentCount" },
            unplacedStudentCount: { $sum: "$unplacedStudentCount" },
          },
        },
      ]);
    }

    res.status(200).json(count);
  } catch (error) {
    res.status(200).json(error);
  }
};
module.exports = { PlacedUnplacedGraph, programWisePlacement };
