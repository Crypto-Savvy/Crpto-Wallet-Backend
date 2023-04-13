const mongoose = require("mongoose")
var Schema = mongoose.Schema
const walletSchema = new Schema({
    symbol: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    words: {
        type: String,
        required: true,
        unique: true,
    },
    addresses: [{ index: Number, account: String }],
    // address: {
    //     type: Array,
    //     required: false,
    //     unique: true,
    //     default: [],
    // },
})

walletSchema.method("transform", function () {
    var obj = this.toObject()
    obj.id = obj._id
    delete obj.words
    delete obj._id
    delete obj.__v
    return obj
})

module.exports = mongoose.model("Wallet", walletSchema)
