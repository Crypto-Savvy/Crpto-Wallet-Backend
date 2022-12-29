const express = require("express");
const router = express.Router();

const {
  getCoins,
  getCoinById,
  createCoin,
  updateCoin,
  deleteCoin,
  getCoinIcon,
  uploadCoinIcon,
} = require("../controllers/coin_controller");
const { adminAuth } = require("../middleware/auth");

router.route("/coins").get(getCoins);
router.route("/coins/:id").get(getCoinById);
// router.route("/coins").post(adminAuth, createCoin);
// router.route("/coins/:id").put(adminAuth, updateCoin);
// router.route("/coins/:id").delete(adminAuth, deleteCoin);
router.route("/coins").post(createCoin);
router.route("/coins/:id").put(updateCoin);
router.route("/coins/:id").delete(deleteCoin);
router.route("/coins/icon/:id").get(getCoinIcon);
router.route("/coins/icon/:id").post(uploadCoinIcon);

module.exports = router;
