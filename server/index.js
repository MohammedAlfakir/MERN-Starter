// Calling Express Freamwork
const express = require("express");
const app = express();

const _PORT = process.env.PORT;

//This to processes the request body and makes it available in req.body
app.use(express.json());

// Adding Cors To allow Access Control requests to API
const cors = require("cors");
app.use(cors());

// Calling Mongoose
const mongoose = require("mongoose");

// Database informations
const username = process.env.USERNAME,
  password = process.env.PASSWORD,
  database = process.env.DATABASE;

// Connecting To Database Specifically in mern Database
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.uk02c.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Successfully to db");
  })
  .catch(error => {
    console.log("Not Connecting To Db", error);
  });

// Server Port
app.listen(_PORT, () => {
  console.log(`Port ${_PORT} is working`);
});

/*  Models  */

// Users Model
const UsersModel = require("./models/users");

// Building Api
app.get("/users", async (req, res) => {
  const users = await UsersModel.find();
  res.json(users);
});

// Posting Data
app.post("/createuser", async (req, res) => {
  const user = req.body;
  const newUser = new UsersModel(user);
  await newUser.save();
  res.json(user);
});
