const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const coinSchema = new Schema({
  _id: {
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
  icon: {
    type: String,
    required: true,
    unique: true,
  },
});

coinSchema.method("transform", function () {
  var obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
});

module.exports = mongoose.model("Coin", coinSchema);
