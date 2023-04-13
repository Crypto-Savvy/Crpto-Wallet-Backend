const express = require("express")
const router = express.Router()

const {
    getAddress,
    getAddressById,
    getAllAddress,
    createAddress,
} = require("../controller/ether.controller")
const { adminAuth } = require("../middleware/auth")

// router.route("/eth").get(adminAuth, getAllAddress)
router.route("/eth").get(getAddress)
router.route("/eth/create").get(createAddress)
router.route("/eth/:id").get(adminAuth, getAddressById)

module.exports = router
