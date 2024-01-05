const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://manasseh919:seyrammann@cluster0.sqmuurg.mongodb.net/")
  .then(() => {
    console.log(`Connected to mongoDB ${mongoose.connection.host}`);
  })
  .catch((error) => {
    console.log("error connecting to mongo DB");
  });

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

const User = require("./models/user");
const Todo = require("./models/todo");


//endpoint to register user to database
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    ////check if email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("email already registered");
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();
    res.status(202).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("error registering the user", error);
    res.status(500).json({ message: "Registration failed" });
  }
});
