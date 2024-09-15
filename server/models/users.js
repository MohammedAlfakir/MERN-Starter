const mongoose = require("mongoose");

// Schema For Users Table
const UsersSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String },
});

// Selecting Model From Database and Wich Schema
const UsersModel = mongoose.model("users", UsersSchema);

// Exporting Schema
module.exports = UsersModel;
