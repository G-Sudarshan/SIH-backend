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

const AddPlacementData = async (req, res) => {
  try {
    // Fetching all distinct programs for collegeId and year
    const distinctProgram = await CSV.distinct("program", {
      collegeId: "62fa2a7cfa0d385762e2948c",
      year: "2022",
    });

    //Fetching all

    // // Fetching all distinct branch for each year
    // for (let i = 0; i < distinct_program_array.length; i++) {
    //   distinct_branch_array = await CSV.distinct("branch", {
    //     program: distinct_program_array[i],
    //     collegeId: "62fa2a7cfa0d385762e2948c",
    //     year: "2022",
    //   });

    //   // userModel.countDocuments({name: "sam"});
    //   for (let j = 0; j < distinct_branch_array.length; j++) {
    //     // placed count
    //     // let placement_data_row = {};
    //     count_placed_student = await CSV.countDocuments({
    //       program: distinct_program_array[i],
    //       branch: distinct_branch_array[j],
    //       collegeId: "62fa2a7cfa0d385762e2948c",
    //       year: "2022",
    //       status: "Employed",
    //     });
    //     console.log(
    //       "Placed stud for ",
    //       distinct_branch_array[j],
    //       " = ",
    //       count_placed_student
    //     );

    //     // unplaced count
    //     count_unplaced_student = await CSV.countDocuments({
    //       program: distinct_program_array[i],
    //       branch: distinct_branch_array[j],
    //       collegeId: "62fa2a7cfa0d385762e2948c",
    //       year: "2022",
    //       status: "Unemployed",
    //     });
    //     console.log(
    //       "Unplaced stud for ",
    //       distinct_branch_array[j],
    //       " = ",
    //       count_unplaced_student
    //     );

    //     count_male_placed_student = await CSV.countDocuments({
    //       program: distinct_program_array[i],
    //       branch: distinct_branch_array[j],
    //       collegeId: "62fa2a7cfa0d385762e2948c",
    //       year: "2022",
    //       gender: "Male",
    //       status: "Employed",
    //     });
    //     console.log(
    //       "Male placed stud for ",
    //       distinct_branch_array[j],
    //       " = ",
    //       count_male_placed_student
    //     );

    //     count_male_unplaced_student = await CSV.countDocuments({
    //       program: distinct_program_array[i],
    //       branch: distinct_branch_array[j],
    //       collegeId: "62fa2a7cfa0d385762e2948c",
    //       year: "2022",
    //       gender: "Male",
    //       status: "Unemployed",
    //     });
    //     console.log(
    //       "Male unplaced stud for ",
    //       distinct_branch_array[j],
    //       " = ",
    //       count_male_unplaced_student
    //     );

    //     count_female_placed_student = await CSV.countDocuments({
    //       program: distinct_program_array[i],
    //       branch: distinct_branch_array[j],
    //       collegeId: "62fa2a7cfa0d385762e2948c",
    //       year: "2022",
    //       gender: "Female",
    //       status: "Employed",
    //     });
    //     console.log(
    //       "Female placed stud for ",
    //       distinct_branch_array[j],
    //       " = ",
    //       count_female_placed_student
    //     );

    //     count_female_unplaced_student = await CSV.countDocuments({
    //       program: distinct_program_array[i],
    //       branch: distinct_branch_array[j],
    //       collegeId: "62fa2a7cfa0d385762e2948c",
    //       year: "2022",
    //       gender: "Female",
    //       status: "Unemployed",
    //     });
    //     console.log(
    //       "Female unplaced stud for ",
    //       distinct_branch_array[j],
    //       " = ",
    //       count_female_unplaced_student
    //     );

    //     count_minority_student = await CSV.countDocuments({
    //       program: distinct_program_array[i],
    //       branch: distinct_branch_array[j],
    //       collegeId: "62fa2a7cfa0d385762e2948c",
    //       year: "2022",
    //       minority: "true",
    //       status: { $not: { $eq: "Higher studies" } },
    //     });
    //     console.log(
    //       "Minority  stud for ",
    //       distinct_branch_array[j],
    //       " = ",
    //       count_minority_student
    //     );

    //     const category = ["Open", "OBC", "SC", "ST", "Other"];
    //     categoryTotalCount = {};

    //     for (let k = 0; k < category.length; k++) {
    //       count_category = await CSV.countDocuments({
    //         program: distinct_program_array[i],
    //         branch: distinct_branch_array[j],
    //         collegeId: "62fa2a7cfa0d385762e2948c",
    //         year: "2022",
    //         category: category[k],
    //         status: { $not: { $eq: "Higher studies" } },
    //       });
    //       // console.log(category[k], " placement stud for ", distinct_branch_array[j], " = ", count_category);
    //       categoryTotalCount[category[k]] = count_category;
    //     }
    //     console.log("categoryTotalCount = ", categoryTotalCount);

    //     const company = [
    //       "Fintech",
    //       "Product",
    //       "Startup",
    //       "Consultant",
    //       "Other",
    //     ];
    //     companyTotalCount = {};

    //     for (let k = 0; k < company.length; k++) {
    //       count_company = await CSV.countDocuments({
    //         program: distinct_program_array[i],
    //         branch: distinct_branch_array[j],
    //         collegeId: "62fa2a7cfa0d385762e2948c",
    //         year: "2022",
    //         company: company[k],
    //         status: { $not: { $eq: "Higher studies" } },
    //       });
    //       // console.log(category[k], " placement stud for ", distinct_branch_array[j], " = ", count_category);
    //       companyTotalCount[company[k]] = count_company;
    //     }
    //     console.log("companyTotalCount = ", companyTotalCount);
    //   } //for loop for branch array
    //   console.log("Branch => ", distinct_branch_array);
    // } // for loop program array

    res.json(distinctProgram);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { AddCSV, AddPlacementData };
