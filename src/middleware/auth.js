// const jwt = require("jsonwebtoken")

exports.adminAuth = (req, res, next) => {
    // const token = req.cookies.jwt;
    const token = getTokenFromHeaders()
    if (token) {
        jwt.verify(token, process.env.TOKEN_KEY, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: "Not authorized" })
            } else {
                if (decodedToken.role !== "admin") {
                    return res.status(401).json({ message: "Not authorized" })
                } else {
                    next()
                }
            }
        })
    } else {
        return res
            .status(401)
            .json({ message: "Not authorized, token not available" })
    }
}
exports.userAuth = (req, res, next) => {
    // const token = req.cookies.jwt;

    const token = getTokenFromHeaders()
    if (token) {
        jwt.verify(token, process.env.TOKEN_KEY, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: "Not authorized" })
            } else {
                if (decodedToken.role !== "basic") {
                    return res.status(401).json({ message: "Not authorized" })
                } else {
                    next()
                }
            }
        })
    } else {
        return res
            .status(401)
            .json({ message: "Not authorized, token not available" })
    }
}

const getTokenFromHeaders = (req) => {
    const {
        headers: { authorization },
    } = req

    if (authorization && authorization.split(" ")[0] === "Token") {
        return authorization.split(" ")[1]
    }
    return null
}
