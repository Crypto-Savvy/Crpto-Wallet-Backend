const express = require("express");
const { adminAuth, userAuth } = require("../middleware/auth");
const Coin = require("../models/coin_model");

//fetch all coins
exports.getCoins = async (req, res) => {
  try {
    const coins = await Coin.find({});
    res.status(200).send(coins);
  } catch (error) {
    res.status(400).send(error);
  }
};

//fetch an coin with id
exports.getCoinById = async (req, res) => {
  try {
    const coin = await Coin.findOne({ _id: req.params.id });
    if (!coin) {
      res.status(404).send({ error: "Coin not found" });
    }
    res.status(200).send(coin);
  } catch (error) {
    res.status(400).send(error);
  }
};

//create coin record
exports.createCoin = async (req, res) => {
  try {
    const coin = new Coin(req.body);
    const duplicateCoinName = await Coin.findOne({ name: coin.name });
    if (duplicateCoinName)
      return res.status(400).send({ message: "Duplicate coin name" });
    const duplicateCoinCode = await Coin.findOne({ code: coin.code });
    if (duplicateCoinCode)
      return res.status(400).send({ message: "Duplicate coin code" });
    const duplicateCoinIcon = await Coin.findOne({ icon: coin.icon });
    if (duplicateCoinIcon)
      return res.status(400).send({ message: "Duplicate coin icon" });

    await coin.save();

    res.status(201).send({ coin });
  } catch (error) {
    console.log({ error });
    res.status(400).send({ message: error });
  }
};

//update coin record

exports.updateCoin = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "code", "price", "icon"];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "invalid updates on coin" });
  }

  try {
    const coin = await Coin.findOne({ _id: req.params.id });
    console.log(coin);
    if (!coin) {
      return res.status(404).send();
    }

    updates.forEach((update) => (item[update] = req.body[update]));
    console.log(coin);
    await coin.save();
    res.send(coin);
  } catch (error) {
    res.status(400).send(error);
  }
};

//delete coin record
exports.deleteCoin = async (req, res) => {
  try {
    const deletedCoin = await Coin.findOneAndDelete({ _id: req.params.id });
    if (!deletedCoin) {
      res.status(404).send({ error: "Coin not found" });
    }
    res.send(deletedCoin);
  } catch (error) {
    res.status(400).send(error);
  }
};

//fetch coin icon
exports.getCoinIcon = async (req, res) => {
  try {
    console.log("test");
    var filePath = path.join(__dirname).join("/upload/" + req.params.id);
    console.log(filePath);
    fetch(filePath)
      //                         vvvv
      .then((response) => response.blob())
      .then((imageBlob) => {
        // Then create a local URL for that image and print it
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log(imageObjectURL);
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

//upload coin icon
exports.uploadCoinIcon = async (req, res) => {
  try {
    // Get the file that was set to our field named "image"
    const { image } = req.files;

    console.log(req.files);

    // If no image submitted, exit
    if (!image) return res.status(400).send({ error: "no image" });

    // If does not have image mime type prevent from uploading
    if (/image^/.test(image.mimetype))
      return res.status(400).send({ error: "invalid mime type" });

    // Move the uploaded image to our upload folder
    image.mv(
      __dirname + "/upload/" + req.params.id + "." + image.mimetype.substr(6)
    );

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error);
  }
};
