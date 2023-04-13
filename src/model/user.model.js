const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const { Schema } = mongoose

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "Customer-1",
            required: true,
        },
    },
    {
        toJSON: {
            transform: function (doc, ret) {
                ret.id = ret._id
                delete ret._id
                delete ret.password
                delete ret.__v
            },
        },
    },
    {
        timestamps: true,
    }
)

UserSchema.pre("save", async function (next) {
    try {
        // check method of registration
        const user = this
        if (!user.isModified("password")) next()
        // generate salt
        const salt = await bcrypt.genSalt(10)
        // hash the password
        const hashedPassword = await bcrypt.hash(this.password, salt)
        // replace plain text password with hashed password
        this.password = hashedPassword
        next()
    } catch (error) {
        return next(error)
    }
})

UserSchema.methods.matchPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw new Error(error)
    }
}

UserSchema.methods.generateJWT = function () {
    const today = new Date()
    const expirationDate = new Date(today)
    expirationDate.setDate(today.getDate() + 60)

    return jwt.sign(
        {
            id: this._id,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
        },
        process.env.TOKEN_SECRET
    )
}

UserSchema.methods.toAuthJSON = function () {
    return {
        id: this._id,
        token: this.generateJWT(),
    }
}

UserSchema.method("transform", function () {
    var obj = this.toObject()
    // obj.id = obj._id;
    delete obj._id
    delete obj.__v
    return obj
})

mongoose.model("Users", UserSchema)
