const mongoose = require("mongoose")
const passport = require("passport")
const LocalStrategy = require("passport-local")

const Users = mongoose.model("Users")

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
        },
        async (email, password, done) => {
            try {
                const user = await Users.findOne({ email: email })
                if (!user) return done(null, false)
                const isMatch = await user.matchPassword(password)
                if (!isMatch) return done(null, false)
                // if passwords match return user
                return done(null, user)
            } catch (error) {
                console.log(error)
                return done(error, false)
            }
        }
    )
)
