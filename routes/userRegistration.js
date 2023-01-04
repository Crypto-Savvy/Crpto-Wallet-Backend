require("dotenv").config();
require("../config/database");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const User = require("../model/user.model");
// const verifyToken = require("../middleware/auth");
app.post("/user", async (req, res) => {
  // Our register logic starts here
  try {
    const { first_name, last_name, email, phone_number, password } = req.body;
    if (email && phone_number == " ") {
      //   res.status(400).send("All input is required");
      res.status(409).json({
        response: "Please enter your email or phone no",
      });
    } else {
      const oldUser = await User.findOne({ email });
      const oldUPhono = await User.findOne({ phone_number });
      if (oldUser) {
        return res.status(409).json({
          response: "Email is already exist.",
        });
      }
      if (oldUPhono) {
        return res.status(409).json({
          response: "Phone number is already exist. Please Login",
        });
      }
      encryptedPassword = await bcrypt.hash(password, 10); //rnrypt the password
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(),
        phone_number, // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
      const token = jwt.sign(
        { user_id: user._id, email, phone_number },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      res.status(201).json({
        User_id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_number: user.phone_number,
        token: user.token,
      });
    }
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      ErrorResponse: err,
    });
  }
});
//Creating user routes to fetch users data
app.get("/registerd/user", async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res.json({ message: "No user found" });
    }
    // console.log(user);
    return res.json({ ListOfUsers: user });
  } catch (error) {
    return res.json({ error: error });
  }
});
module.exports = app;
