const mongoose = require("mongoose")

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise

//Connect the using mongoose to the database
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.set("strictQuery", true)
mongoose.set("debug", true)

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", () => {
    console.log("Connected successfully")
})
