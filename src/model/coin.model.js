const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const coinSchema = new Schema({
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

coinSchema.method("transform", function () {
  var obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
});

module.exports = mongoose.model("Coin", coinSchema);