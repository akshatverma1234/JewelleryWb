const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
if (!process.env.MONGODB_URI) {
  throw new Error("Please provide MONGODB URI in the .env file");
}
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected DB");
  } catch (error) {
    console.log("Mongodb connection error", error);
    process.exit(1);
  }
}
module.exports = connectDB;
