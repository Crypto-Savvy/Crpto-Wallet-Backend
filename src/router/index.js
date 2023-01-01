const express = require("express");

const router = express.Router();

const coin = require("./coin.router");

router.use("/api/v1/", coin);

module.exports = router;
