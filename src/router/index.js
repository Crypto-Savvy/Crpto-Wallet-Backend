const express = require("express")

const router = express.Router()

const coin = require("./coin.router")
const auth = require("./auth.router")
const user = require("./user.router")
// const wallet = require("./wallet.router")
const ether = require("./ether.router")

router.use("/api/v1/", coin)
router.use("/api/v1/", auth)
router.use("/api/v1/", user)
// router.use("/api/v1/", wallet)
router.use("/api/v1/wallet", ether)

module.exports = router
