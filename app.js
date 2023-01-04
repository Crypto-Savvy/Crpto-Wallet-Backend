require("dotenv").config();
require("./config/database");
const express = require("express");
const app = express();
app.use(express.json());

const signUp = require("./routes/userRegistration");
const Signin = require("./routes/userLogin");

app.use("/registration", signUp);
app.use("/login", Signin);

module.exports = app;
