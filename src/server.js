const dotenv = require("dotenv").config();
const express = require("express");
const dbConfig = require("./config/dbConnection");
const fileUpload = require("express-fileupload");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger-output.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../public/")));
app.use(
  fileUpload({
    limits: {
      fileSize: 1000000, // Around 1MB
    },
    abortOnLimit: true,
  })
);

/* Routes */
const router = require("./router/coin.router");

/* Middlewares */
app.use(router);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `Server running at ${port}: \nAPI documentation: http://localhost:${port}/doc`
  );
});

module.exports = app;
