const express = require("express")
const auth = require("../middleware/auth")
const router = express.Router()

const { register, login } = require("../controller/auth.controller")

router.route("/register", auth.optional).post(register)
router.route("/login", auth.optional).post(login)
// router.route("/logout", auth.required).get(logout)

module.exports = router
