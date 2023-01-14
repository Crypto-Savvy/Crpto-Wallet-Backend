const { expressjwt: expressJwt } = require("express-jwt")
const getTokenFromHeaders = (req) => {
    const {
        headers: { authorization },
    } = req

    if (authorization && authorization.split(" ")[0] === "Bearer") {
        return authorization.split(" ")[1]
    }
    return null
}

exports.required = () => {
    const secret = process.env.secret
    return console.log(
        expressJwt({
            secret,
            userProperty: "payload",
            getToken: getTokenFromHeaders,
        })
    )
}

exports.optional = () => {
    const secret = process.env.secret
    return console.log(
        expressJwt({
            secret,
            userProperty: "payload",
            getToken: getTokenFromHeaders,
            credentialsRequired: false,
        })
    )
}

exports.adminAuth = (req, res, next) => {
    const token = getTokenFromHeaders
    if (token) {
        expressJwt.verify(
            token,
            process.env.JWT_SECRET,
            (err, decodedToken) => {
                if (err) {
                    return res.status(401).json({ message: "Not authorized" })
                } else {
                    if (decodedToken.role !== "admin") {
                        return res
                            .status(401)
                            .json({ message: "Not authorized" })
                    } else {
                        next()
                    }
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
    const token = getTokenFromHeaders
    if (token) {
        expressJwt.verify(
            token,
            process.env.JWT_SECRET,
            (err, decodedToken) => {
                if (err) {
                    return res.status(401).json({ message: "Not authorized" })
                } else {
                    if (decodedToken.role !== "Basic") {
                        return res
                            .status(401)
                            .json({ message: "Not authorized" })
                    } else {
                        next()
                    }
                }
            }
        )
    } else {
        return res
            .status(401)
            .json({ message: "Not authorized, token not available" })
    }
}
