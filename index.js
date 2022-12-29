require("dotenv").config();
const express = require("express");
require("./configs/dbConnection");
const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  fileUpload({
    limits: {
      fileSize: 1000000, // Around 1MB
    },
    abortOnLimit: true,
  })
);
// app.use("/api/auth", require("./routers/auth"));
app.use("/api", require("./routers/coin_router"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running at port " + port);
});

module.exports = app;
