const mongoose = require("mongoose")

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise

//Connect the using mongoose to the database
mongoose.connect(
    "mongodb+srv://etana:1234abcd@cluster0.mv9yu4y.mongodb.net/CryptoWalletBackend",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
mongoose.set("strictQuery", true)
mongoose.set("debug", true)
//Now we have to create a schema
const contactInfoSchema = new mongoose.Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    phone_number: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", () => {
    console.log("Connected successfully")
})

//create a  model now o store in to database

const User = mongoose.model("User", contactInfoSchema)
//export the module to use on middle wares
module.exports = User
