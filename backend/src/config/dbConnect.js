const { default: mongoose } = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  try {
    mongoose.set('strictQuery', true);
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
