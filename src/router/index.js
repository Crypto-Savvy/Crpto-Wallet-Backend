const express = require("express");

const router = express.Router();

const coin = require("./coin.router");

router.use("/api/v1/", coin);

function store(req, res) {
  const tools = {};
  return res.status(201).send({});
}

module.exports = router;
