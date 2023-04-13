const express = require("express")
const router = express.Router()

const { getWallets } = require("../controller/wallet.controller")
const { adminAuth } = require("../middleware/auth")

router.route("/wallets").get(getWallets)

module.exports = router

// To desplay all wallet that related to this user
