const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Missing MONGODB_URI in .env");
  }

  const conn = await mongoose.connect(uri);
  console.log("Connected to DB:", mongoose.connection.name);
};

module.exports = connectDB;

