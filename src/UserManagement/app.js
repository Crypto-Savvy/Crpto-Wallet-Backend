require("dotenv").config();
require("../configs/dbConnection");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
// Logic goes here
const User = require("../configs/dbConnection");
//const Contact = require("./db/dbConnection");
// our register logic goes here...
app.post("/register", async (req, res) => {
  try {
    // Get user input
    const { first_name, last_name, email, phone_number, password } = req.body;

    // Validate user input
    if (!(email && password && first_name && last_name && phone_number)) {
      // res.status(400).send("All input is required");
      return res.status(409).json({ Message: "All fields are required" });
    }
    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });
    const phoneNumber = await User.findOne({ phone_number });
    if (oldUser) {
      //return res.status(409).send("User Already Exist. Please Login");
      return res.status(409).json({ Message: "Email is aready exist" });
    }
    if (phoneNumber) {
      return res.status(409).json({ Message: "Phone Number is Already exist" });
    }
    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      phone_number,
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, role: "basic" },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;
    //user.created = "motuma gishu kalbesa";

    // return new user
    res.status(201).json({
      Firstname: user.first_name,
      Lastname: user.last_name,
      Email: user.email,
      phone_number: user.phone_number,
      Password: user.password,
      token: user.token,
    });
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});
// Login
module.exports = app;
