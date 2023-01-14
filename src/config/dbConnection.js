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

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", () => {
    console.log("Connected successfully")
})
