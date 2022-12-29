const mongoose = require("mongoose");
const coinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
  },
  icon: {
    type: String,
    required: true,
    unique: true,
  },
});
const Coin = mongoose.model("Coin", coinSchema);
module.exports = Coin;
