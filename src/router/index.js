const express = require("express");
const ToolsController = require("../controller/tools.controller");

const router = express.Router();

const coin = require("./coin.router");

router.use("/api", coin);

router.get("/test-get", ToolsController.show);
router.post("/test-post", store);
router.delete("/test-delete/:id", ToolsController.delete);

function store(req, res) {
  const tools = {};
  return res.status(201).send({});
}

module.exports = router;
