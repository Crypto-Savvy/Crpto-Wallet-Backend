const dotenv = require("dotenv").config()
const express = require("express")
const fileUpload = require("express-fileupload")
const path = require("path")
const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("../swagger-output.json")
const bodyParser = require("body-parser")
const session = require("express-session")
const cors = require("cors")
const errorHandler = require("errorhandler")
var os = require("os")

//Configure Mongoose
require("./config/dbConnection")

require("./config/passport")

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === "production"

const app = express()

/* Routes */
const router = require("./router")

/* Middlewares */

app.use(cors())
app.use(require("morgan")("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "../public/")))
app.use(
    fileUpload({
        limits: {
            fileSize: 1000000, // Around 1MB
        },
        abortOnLimit: true,
    })
)
app.use(
    session({
        secret: process.env.SESSION_KEY,
        cookie: { maxAge: 60000 },
        resave: false,
        saveUninitialized: false,
    })
)

app.use(router)
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile))

//Error handlers & middlewares
if (!isProduction) {
    app.use((err, req, res) => {
        res.status(err.status || 500)

        res.json({
            errors: {
                message: err.message,
                error: err,
            },
        })
    })

    app.use(errorHandler())
}

app.use((err, req, res) => {
    res.status(err.status || 500)

    res.json({
        errors: {
            message: err.message,
            error: {},
        },
    })
})

const port = process.env.PORT || 10000

var hostname = os.hostname()

app.listen(port, () => {
    console.log(
        `Server running at ${port}: \nAPI documentation: ${hostname}:${port}/doc`
    )
})

module.exports = app
