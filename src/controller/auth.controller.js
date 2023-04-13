// const User = require("../model/user.model.js")
const mongoose = require("mongoose")
const Users = mongoose.model("Users")
const passport = require("passport")

exports.register = async (req, res, next) => {
    const { username, password } = req.body

    if (!password) {
        return res.status(422).json({
            errors: {
                password: "is required",
            },
        })
    }

    if (!username) {
        return res.status(422).json({
            errors: {
                username: "is required",
            },
        })
    }

    if (password.length < 6) {
        return res
            .status(400)
            .json({ message: "Password less than 6 characters" })
    }

    // return User.save().then((user) => {
    //     res.status(201).json({
    //         message: "User successfully created",
    //         user: User.toAuthJSON(),
    //     })
    // })

    await Users.findOne({ username: req.body.username })
        .then((user) => {
            if (user) return res.status(400).json({ message: "Username exist" })

            const User = new Users({ ...req.body })
            return User.save().then((user) => {
                res.status(201).json({
                    message: "User successfully created",
                    user: User.toAuthJSON(),
                })
            })
        })
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Not successful", error: err.message })
        )
}

exports.login = async (req, res, next) => {
    const { username, password } = req.body

    // Check if username and password is provided
    if (!username || !password) {
        return res.status(400).json({
            message: "Username or Password not present",
        })
    }

    try {
        const user = await Users.findOne({ username })

        if (!user) {
            res.status(400).json({
                message: "Login not successful",
                error: "User not found",
            })
        }

        return passport.authenticate(
            "local",
            { session: false },
            (err, passportUser, info) => {
                if (err) {
                    return next(err)
                }
                if (passportUser) {
                    const user = passportUser
                    user.token = passportUser.generateJWT()

                    return res.json(user.toAuthJSON())
                }

                return res.status(400).send(info)
            }
        )(req, res, next)
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}
