// const { expressjwt: expressJwt } = require("express-jwt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const Users = mongoose.model("Users")
const getTokenFromHeaders = (req) => {
    const {
        headers: { authorization },
    } = req

    if (authorization && authorization.split(" ")[0] === "Bearer") {
        return authorization.split(" ")[1]
    }
    return null
}

exports.required = (req) => {
    const secret = process.env.secret
    return console.log(
        expressJwt({
            secret,
            userProperty: "payload",
            getToken: getTokenFromHeaders(req),
        })
    )
}

exports.optional = (req) => {
    const secret = process.env.secret
    return console.log(
        expressJwt({
            secret,
            userProperty: "payload",
            getToken: getTokenFromHeaders(req),
            credentialsRequired: false,
        })
    )
}

const adminAuth = (req, res, next) => {
    const token = getTokenFromHeaders(req)

    if (token != null) {
        jwt.verify(
            token,
            process.env.TOKEN_SECRET,
            async (err, decodedToken) => {
                if (err) {
                    console.log(err)
                    return res.status(401).json({ message: "Not authorized" })
                } else {
                    await Users.findById(decodedToken.id)
                        .then((user) => {
                            if (user.role !== "admin") {
                                return res
                                    .status(401)
                                    .json({ message: "Not authorized" })
                            } else {
                                next()
                            }
                        })
                        .catch((err) =>
                            res.status(400).json({
                                message: "User not found",
                                error: err.message,
                            })
                        )
                }
            }
        )
    } else {
        return res
            .status(401)
            .json({ message: "Not authorized, token not available" })
    }
}

exports.userAuth = (req, res, next) => {
    const token = getTokenFromHeaders(req)
    if (token) {
        expressJwt.verify(
            token,
            process.env.JWT_SECRET,
            async (err, decodedToken) => {
                if (err) {
                    return res.status(401).json({ message: "Not authorized" })
                } else {
                    await Users.findById(decodedToken.id)
                        .then((user) => {
                            if (user.role !== "Customer-1") {
                                return res
                                    .status(401)
                                    .json({ message: "Not authorized" })
                            } else {
                                next()
                            }
                        })
                        .catch((err) =>
                            res.status(400).json({
                                message: "User not found",
                                error: err.message,
                            })
                        )
                }
            }
        )
    } else {
        return res
            .status(401)
            .json({ message: "Not authorized, token not available" })
    }
}

const userId = (req) => {
    const token = getTokenFromHeaders(req)
    if (token) {
        jwt.verify(
            token,
            process.env.TOKEN_SECRET,
            async (err, decodedToken) => {
                if (err) return { message: "Not authorized", error: err }
                await Users.findById(decodedToken.id)
                    .then((user) => {
                        if (user) {
                            console.log(user)
                            return { id: decodedToken.id }
                        } else {
                            console.log("user not found")
                            return { message: "User not found" }
                        }
                    })
                    .catch((err) => {
                        return { message: err }
                    })
            }
        )
    } else {
        return { message: "Not authorized, token not available" }
    }
}

module.exports = { userId, adminAuth }
