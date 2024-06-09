const mongoose = require("mongoose");

const connecttDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://phattemah:BC6fiZ0OvkHFozUg@coded.3y96xhf.mongodb.net/"
    );
    console.log("Connected to DB :) ");
  } catch (error) {
    console.log("ERROR trying to connect to DB :( ", error);
  }
};

module.exports = connecttDB;
