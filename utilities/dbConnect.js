const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv").config();


const dbConnect = () => {
   return mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Database Connection successfully established".red.bold);
   });
};

module.exports = dbConnect;
