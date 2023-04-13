const express = require("express")
const router = express.Router()

const {
    update,
    deleteUser,
    user,
    users,
} = require("../controller/user.controller")
const { adminAuth } = require("../middleware/auth")

router.route("/users/:id").put(adminAuth, update)
router.route("/users/:id").delete(adminAuth, deleteUser)
router.route("/users").get(users)
router.route("/users/:id").get(user)

module.exports = router
