const dotenv = require("dotenv").config()
const express = require("express")
const router = express.Router()
const ethers = require("ethers")

const password = process.env.ENCRYPT_PASSWORD

exports.generateWallet = () => {
    try {
        const wallet = ethers.Wallet.createRandom()
        const words = wallet.mnemonic.phrase
        const node = ethers.utils.HDNode.fromMnemonic(words)
        let account = node.derivePath("m/44'/60'/0'/0/0")

        return {
            status: "success",
            wallet: {
                words: words,
                address: wallet.address,
                account: account.address,
            },
        }
    } catch (err) {
        return { status: "error", message: err }
    }
}

exports.generateAddress = (words, index) => {
    try {
        const node = ethers.utils.HDNode.fromMnemonic(words)
        let hdNode = node.derivePath(`m/44'/60'/0'/0/` + index)
        let wallet = new ethers.Wallet(hdNode.privateKey)
        return { status: "success", account: wallet.address }
    } catch (err) {
        return { status: "error", message: err }
    }
}

exports.restoreWallet = (words) => {
    try {
        const wallet = ethers.Wallet.fromMnemonic(words)

        return {
            wallet: wallet,
        }
    } catch (err) {
        return err
    }
}

exports.restoreNode = (words) => {
    try {
        const node = ethers.utils.HDNode.fromMnemonic(words)

        return {
            node: node,
        }
    } catch (err) {
        return err
    }
}

exports.transfer = async (wallet, recipient, value) => {
    try {
        let signedTransaction = await signTransaction(wallet, recipient, value)
        return {
            signedTransaction: signedTransaction,
        }
    } catch (err) {
        return err
    }
}

async function signTransaction(privatekey, toAddress, value) {
    // let transaction = {
    //     nonce: 0,
    //     gasLimit: 21000,
    //     gasPrice: ethers.utils.bigNumberify("2000000000"),
    //     to: toAddress,
    //     value: ethers.utils.parseEther(value),
    //     data: "0x",
    // }
    // return wallet.sign(transaction)

    /** https://docs.etherscan.io/tutorials/signing-raw-transactions */
    // let privatekey =
    //     "CE75F1A875F2DB7FB064F5DBD302B0C77FFEAA18CC4C314167A5111A04F79AFA"
    let wallet = new ethers.Wallet(privatekey)

    console.log("Using wallet address " + wallet.address)

    let transaction = {
        to: toAddress,
        value: value,
        gasLimit: "21000",
        maxPriorityFeePerGas: ethers.utils.parseUnits("5", "gwei"),
        maxFeePerGas: ethers.utils.parseUnits("20", "gwei"),
        nonce: 1,
        type: 2,
        chainId: 3,
    }

    let rawTransaction = await wallet
        .signTransaction(transaction)
        .then(ethers.utils.serializeTransaction(transaction))
    console.log("Raw txhash string " + rawTransaction)

    // pass the raw transaction hash to the "eth_sendRawTransaction" endpoint
    let gethProxy = await fetch(
        `https://api-ropsten.etherscan.io/api?module=proxy&action=eth_sendRawTransaction&hex=${rawTransaction}&apikey=YourApiKeyToken`
    )
    let response = await gethProxy.json()

    // print the API response
    console.log(response)
}
