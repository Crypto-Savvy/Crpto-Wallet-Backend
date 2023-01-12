const express = require("express")
const router = express.Router()

const {
    update,
    deleteUser,
    user,
    users,
} = require("../controller/user.controller")
const { adminAuth } = require("../middleware/auth")

router.route("/user/:id").put(adminAuth, update)
router.route("/user/:id").delete(adminAuth, deleteUser)
router.route("/user").get(users)
router.route("/user/:id").get(user)

module.exports = router
