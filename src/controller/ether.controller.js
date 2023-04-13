const Wallet = require("../model/wallet.model")
const { generateAddress, generateWallet } = require("../util/ethereum.util")
const { userId } = require("../middleware/auth")

const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const Users = mongoose.model("Users")

//fetch all ethereum address
exports.getAllAddress = async (req, res) => {
    /* 	#swagger.tags = ['Ethereum Wallet']
        #swagger.description = 'Endpoint to get all ethereum address' */

    /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/eth_all_address" },
      description: "Ethereum address list." } */

    try {
        const wallet = await Wallet.find({})
        res.status(200).send({ wallet })
    } catch (error) {
        res.status(400).send(error)
    }
}

//fetch all ethereum address for specific user
exports.getAddress = async (req, res) => {
    /* 	#swagger.tags = ['Ethereum Wallet']
        #swagger.description = 'Endpoint to get all ethereum address' */

    /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/eth_all_address" },
      description: "Ethereum address list." } */

    try {
        var preId = userId(req)
        console.log(preId)

        // console.log("ther " + JSON.stringify(userId(req)))
        // if (user_Id !== null) {
        const wallet = await Wallet.find({ userId: "", symbol: "ETH" })
        res.status(200).send({ wallet })
        // }
    } catch (error) {
        res.status(400).send(error)
    }
}

//fetch ethereum address by id
exports.getAddressById = async (req, res) => {
    /* 	#swagger.tags = ['Ethereum Wallet']
        #swagger.description = 'Endpoint to get all ethereum address' */

    /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/eth_all_address" },
      description: "Ethereum address list." } */

    try {
        const wallet = await Wallet.findOne(req.params.id)
        res.status(200).send({ wallet })
    } catch (error) {
        res.status(400).send(error)
    }
}

//create ethereum address
exports.createAddress = async (req, res) => {
    /* 	#swagger.tags = ['Ethereum Wallet']
        #swagger.description = 'Endpoint to create ethereum address' */

    /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/create_eth_address" },
      description: "Ethereum address." } */
    try {
        //get user id from token
        Wallet.find({ userId, symbol: "ETH" }).then(async (wallet) => {
            if (wallet) {
                let index = Object.keys(wallet.address).length
                const response = generateAddress(wallet.word, index)
                if (response.status == "success") {
                    let address = { index, account: response.account }
                    wallet.addresses.push(address)

                    await wallet.save()

                    res.status(201).send({ wallet })
                } else {
                    console.log(response.message)
                    res.status(400).send({ message: "Something went wrong" })
                }
            } else {
                const response = generateWallet()
                if (response.status == "success") {
                    let address = { index: 0, account: response.wallet.account }
                    const wallet = new Wallet({
                        symbol: "ETH",
                        userId,
                        words: response.wallet.words,
                    })
                    wallet.addresses.push(address)

                    await wallet.save()

                    res.status(201).send({ wallet })
                } else {
                    console.log(response.message)
                    res.status(400).send({ message: "Something went wrong" })
                }
            }
        })
    } catch (error) {
        console.log({ error })
        res.status(400).send({ message: error })
    }
}

const getTokenFromHeaders = (req) => {
    const {
        headers: { authorization },
    } = req

    if (authorization && authorization.split(" ")[0] === "Bearer") {
        return authorization.split(" ")[1]
    }
    return null
}
