const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  // email: { type: String, unique: true },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    // required: [true, "email not provided"],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "{VALUE} is not a valid email!",
    },
  },
  phone_number: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});
module.exports = mongoose.model("user", userSchema);
