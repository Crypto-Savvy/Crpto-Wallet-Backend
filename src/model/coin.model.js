const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const coinSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
    unique: true,
  },
  Url: {
    type: String,
    required: true,
    unique: true,
  },
  index: {
    type: Number,
    required: false,
    unique: true,
  },
});

coinSchema.method("transform", function () {
  var obj = this.toObject();
  // obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
});

module.exports = mongoose.model("Coin", coinSchema);
