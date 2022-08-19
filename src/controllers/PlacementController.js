const CSV = require("../models/CSV");
const Placement = require("../models/Placement");

const addPlacementRecords = async (req, res) => {
  const responseObj = {};
  const responseArray = [];

  try {
    responseObj.collegeId = req.body.collegeId;
    // Fetching all distinct programs for collegeId and year
    const distinct_program_array = await CSV.distinct("program", {
      collegeId: "62fa2a7cfa0d385762e2948c",
      year: "2022",
    });

    // Fetching all distinct branch for each year
    for (let i = 0; i < distinct_program_array.length; i++) {
      distinct_branch_array = await CSV.distinct("branch", {
        program: distinct_program_array[i],
        collegeId: "62fa2a7cfa0d385762e2948c",
        year: "2022",
      });

      // userModel.countDocuments({name: "sam"});
      for (let j = 0; j < distinct_branch_array.length; j++) {
        // placed count
        // let placement_data_row = {};
        count_placed_student = await CSV.countDocuments({
          program: distinct_program_array[i],
          branch: distinct_branch_array[j],
          collegeId: "62fa2a7cfa0d385762e2948c",
          year: "2022",
          status: "Employed",
        });

        responseObj.placedStudentCount = count_placed_student;
        console.log(
          "Placed stud for ",
          distinct_branch_array[j],
          " = ",
          count_placed_student
        );

        // unplaced count
        count_unplaced_student = await CSV.countDocuments({
          program: distinct_program_array[i],
          branch: distinct_branch_array[j],
          collegeId: "62fa2a7cfa0d385762e2948c",
          year: "2022",
          status: "Unemployed",
        });
        responseObj.unplacedStudentCount = count_unplaced_student;
        console.log(
          "Unplaced stud for ",
          distinct_branch_array[j],
          " = ",
          count_unplaced_student
        );

        count_male_placed_student = await CSV.countDocuments({
          program: distinct_program_array[i],
          branch: distinct_branch_array[j],
          collegeId: "62fa2a7cfa0d385762e2948c",
          year: "2022",
          gender: "Male",
          status: "Employed",
        });

        responseObj.malePlacedStudentCount = count_male_placed_student;
        console.log(
          "Male placed stud for ",
          distinct_branch_array[j],
          " = ",
          count_male_placed_student
        );

        count_male_unplaced_student = await CSV.countDocuments({
          program: distinct_program_array[i],
          branch: distinct_branch_array[j],
          collegeId: "62fa2a7cfa0d385762e2948c",
          year: "2022",
          gender: "Male",
          status: "Unemployed",
        });

        responseObj.maleUnplacedStudentCount = count_male_unplaced_student;
        console.log(
          "Male unplaced stud for ",
          distinct_branch_array[j],
          " = ",
          count_male_unplaced_student
        );

        count_female_placed_student = await CSV.countDocuments({
          program: distinct_program_array[i],
          branch: distinct_branch_array[j],
          collegeId: "62fa2a7cfa0d385762e2948c",
          year: "2022",
          gender: "Female",
          status: "Employed",
        });

        responseObj.femalePlacedStudentCount = count_female_placed_student;
        console.log(
          "Female placed stud for ",
          distinct_branch_array[j],
          " = ",
          count_female_placed_student
        );

        count_female_unplaced_student = await CSV.countDocuments({
          program: distinct_program_array[i],
          branch: distinct_branch_array[j],
          collegeId: "62fa2a7cfa0d385762e2948c",
          year: "2022",
          gender: "Female",
          status: "Unemployed",
        });
        responseObj.femaleUnplacedStudentCount = count_female_unplaced_student;
        console.log(
          "Female unplaced stud for ",
          distinct_branch_array[j],
          " = ",
          count_female_unplaced_student
        );

        count_minority_student = await CSV.countDocuments({
          program: distinct_program_array[i],
          branch: distinct_branch_array[j],
          collegeId: "62fa2a7cfa0d385762e2948c",
          year: "2022",
          minority: "true",
          status: { $not: { $eq: "Higher studies" } },
        });
        responseObj.minorityCount = count_minority_student;
        console.log(
          "Minority  stud for ",
          distinct_branch_array[j],
          " = ",
          count_minority_student
        );

        const category = ["Open", "OBC", "SC", "ST", "Other"];
        categoryTotalCount = {};

        for (let k = 0; k < category.length; k++) {
          count_category = await CSV.countDocuments({
            program: distinct_program_array[i],
            branch: distinct_branch_array[j],
            collegeId: "62fa2a7cfa0d385762e2948c",
            year: "2022",
            category: category[k],
            status: { $not: { $eq: "Higher studies" } },
          });
          // console.log(category[k], " placement stud for ", distinct_branch_array[j], " = ", count_category);
          categoryTotalCount[category[k]] = count_category;
        }
        responseObj.category = categoryTotalCount;
        console.log("categoryTotalCount = ", categoryTotalCount);

        const company = [
          "Fintech",
          "Product",
          "Startup",
          "Consultant",
          "Other",
        ];
        companyTotalCount = {};

        for (let k = 0; k < company.length; k++) {
          count_company = await CSV.countDocuments({
            program: distinct_program_array[i],
            branch: distinct_branch_array[j],
            collegeId: "62fa2a7cfa0d385762e2948c",
            year: "2022",
            company: company[k],
            status: { $not: { $eq: "Higher studies" } },
          });
          // console.log(category[k], " placement stud for ", distinct_branch_array[j], " = ", count_category);
          companyTotalCount[company[k]] = count_company;
        }
        responseObj.companyType = companyTotalCount;
        console.log("companyTotalCount = ", companyTotalCount);

        responseObj.branch = distinct_branch_array[j];
        responseObj.year = 2022;
        responseObj.program = distinct_program_array[i];
        responseObj.maleCount =
          responseObj.malePlacedStudentCount +
          responseObj.maleUnplacedStudentCount;
        responseObj.femaleCount =
          responseObj.femalePlacedStudentCount +
          responseObj.femaleUnplacedStudentCount;

        responseArray.push(responseObj);
      } //for loop for branch array
      console.log("Branch => ", distinct_branch_array);
    } // for loop program array

    const placementData = await Placement.insertMany(responseArray);
    res.status(201).json(placementData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addPlacementRecords };
