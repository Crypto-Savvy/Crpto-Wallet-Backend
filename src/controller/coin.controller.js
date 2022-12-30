const { adminAuth, userAuth } = require("../middleware/auth");
const Coin = require("../model/coin.model");
const path = require("path");
var md5 = require("md5");

//fetch all coins
exports.getCoins = async (req, res) => {
  /* 	#swagger.tags = ['Coin']
        #swagger.description = 'Endpoint to get all coins' */

  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/coins" },
      description: "Coins list." } */

  try {
    const coins = await Coin.find({});
    res.status(200).send({ coins });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.findOne = (req, res) => {
  /* 	#swagger.tags = ['Coin']
        #swagger.description = 'Endpoint to get specific coin' */

  /* #swagger.responses[200] = {
      schema: { "$ref": "#/definitions/coin" },
      description: "Coin listed successfully." } */

  Coin.findById(req.params.id)
    .then((coin) => {
      if (!coin) {
        return res.status(404).send({
          message: "Coin not found with id " + req.params.id,
        });
      }

      res.send(coin.transform());
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Coin not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving Coin with id " + req.params.id,
      });
    });
};

//chack change in coin record
exports.getCoinsChange = async (req, res) => {
  /* 	#swagger.tags = ['Coin']
        #swagger.description = 'Check if thare is change in coin record' */

  /* #swagger.responses[200] = {
      schema: { "$ref": "#/definitions/md5" },
      description: "md5 of record returned." } */
  try {
    const coins = await Coin.find({});
    var hash = md5(coins);
    console.log(hash);
    res.status(200).send({ md5: hash });
  } catch (error) {
    res.status(400).send(error);
  }
};

//fetch an coin with id
exports.getCoinById = async (req, res) => {
  /* 	#swagger.tags = ['Coin']
        #swagger.description = 'Endpoint to get specific coin' */

  /* #swagger.responses[200] = {
      schema: { "$ref": "#/definitions/coin" },
      description: "Coin listed successfully." } */
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
  /* 	#swagger.tags = ['Coin']
        #swagger.description = 'Endpoint to create coin record' */

  /* #swagger.security = [{
            "apiKeyAuth": []
    }] */

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
  /* 	#swagger.tags = ['Coin']
        #swagger.description = 'Endpoint to update a specific coin'
        #swagger.summary ='Update an existing pet' */

  /* #swagger.responses[200] = {
            description: 'User successfully obtained.',
            schema: { $ref: '#/definitions/coin' }
    } */
  /* #swagger.security = [{
            "apiKeyAuth": []
    }] */

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
  /* 	#swagger.tags = ['Coin']
        #swagger.description = 'Endpoint to delete a specific coin' */

  /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
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
  /* 	#swagger.tags = ['Coin']
        #swagger.description = 'Endpoint to get specific coin icon' */

  /* #swagger.responses[200] = {
      schema: { "$ref": "#/definitions/getCoinIcon" },
      description: "Coin icon get successfully." } */
  try {
    res.sendFile(path.resolve(__dirname, "../../public/" + req.params.id));
  } catch (error) {
    res.status(400).send(error);
  }
};

//upload coin icon
exports.uploadCoinIcon = async (req, res) => {
  /* 	#swagger.tags = ['Coin']
        #swagger.description = 'Endpoint to set icon for a specific coin' */

  /*	 #swagger.consumes = ['multipart/form-data'] 
      #swagger.parameters['image'] = {
            in: 'formData',
            type: 'file',
            description: 'Coin icon.',
            required: true
    } */

  /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
  try {
    // Get the file that was set to our field named "image"
    const { image } = req.files;

    console.log(req.files);

    // If no image submitted, exit
    if (!image) return res.status(400).send({ error: "no image" });

    // If does not have image mime type prevent from uploading
    if (/image^/.test(image.mimetype))
      return res.status(400).send({ error: "invalid mime type" });

    image.mv(path.resolve(__dirname, "../../public/" + req.params.id));

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error);
  }
};
