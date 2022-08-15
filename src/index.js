const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
const connectDB = require("./db/connect");
require("dotenv/config");

//middlewares
app.use(cors());
app.use(express.json());

//Routes
const User = require("./routes/UserRoute");
const College = require("./routes/CollegeRoute");
const AICTE = require("./routes/AICTERoute");

//custom middlewares
app.use("/api/v1/user", User);
app.use("/api/v1/college", College);
app.use("/api/v1/AICTE", AICTE);

app.get("/", (req, res) => {
  res.json({ message: "On Home Page" });
});

const start = async () => {
  try {
    await connectDB(process.env.CONNECT_DB);
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}/`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
