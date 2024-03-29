const mongoose = require("mongoose")
const User = mongoose.model("Users")
const bcrypt = require("bcryptjs")

exports.update = async (req, res, next) => {
    const { role, password } = req.body
    const userId = req.params.id
    let isDataChenge = false
    // Verifying if role and id is presnt
    if (role || password) {
        // Finds the user with the id
        await User.findById(userId)
            .then((user) => {
                if (user) {
                    // Verifies the user role
                    if (user.role !== role) {
                        user.role = role
                        isDataChenge = true
                    }
                    // Verifies the user password
                    if (password !== "" && password !== null) {
                        // const password = req.body.password;
                        if (password.length < 6) {
                            return res.status(400).json({
                                message: "Password less than 6 characters",
                            })
                        }

                        bcrypt.hash(password, 10).then(async (hash) => {
                            await User.updateOne(
                                { _id: userId },
                                { $set: { password: hash } },
                                { new: true }
                            )
                        })

                        isDataChenge = true
                    }
                    if (isDataChenge) {
                        user.save((err) => {
                            //Monogodb error checker
                            if (err) {
                                return res.status(400).json({
                                    message: "An error occurred",
                                    error: err.message,
                                })
                                process.exit(1)
                            }
                            res.status(200).json({
                                message: "Update successful",
                                user: user,
                            })
                        })
                    } else {
                        res.status(400).json({
                            message: "User is already updated",
                        })
                    }
                } else {
                    res.status(400).json({
                        message: "User not found",
                    })
                }
            })
            .catch((err) =>
                res
                    .status(400)
                    .json({ message: "Not successful", error: err.message })
            )
    } else {
        res.status(400).json({ message: "No updatable field present" })
    }
}

exports.deleteUser = async (req, res, next) => {
    const id = req.params.id
    console.log(id)
    await User.findById(id)
        .then(async (user) => {
            if (user) {
                User.findByIdAndDelete(id)
                    .then((data) => {
                        if (data) {
                            res.status(200).json({
                                message: "User delete successfull",
                            })
                        } else {
                            res.status(400).json({
                                message: "An error occurred",
                            })
                        }
                    })
                    .catch((err) =>
                        res.status(400).json({
                            message: "Delete not successful",
                            error: err.message,
                        })
                    )
            } else {
                res.status(400).json({
                    message: "User not exist",
                })
            }
        })
        .catch((err) =>
            res.status(400).json({
                message: "Find user not successful",
                error: err.message,
            })
        )
}

exports.users = async (req, res, next) => {
    await User.find({})
        .then((users) => {
            const userFunction = users.map((user) => {
                const container = {}
                container.username = user.username
                container.role = user.role
                container.id = user._id

                return container
            })
            res.status(200).json({ user: userFunction })
        })
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Not successful", error: err.message })
        )
}

exports.user = async (req, res, next) => {
    await User.findById(req.params.id)
        .then((user) => {
            if (user) {
                const container = {}
                container.username = user.username
                container.role = user.role
                container.id = user._id

                res.status(200).json(container)
            } else {
                res.status(400).json({
                    message: "User not found",
                })
            }
        })
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Not successful", error: err.message })
        )
}
