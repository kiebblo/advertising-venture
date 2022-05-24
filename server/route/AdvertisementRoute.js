const express = require("express");
const router = express.Router();

const AdvertisementController = require("../controller/AdvertisementController");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/", auth, multer, AdvertisementController.createAdvertisement);
router.get("/", AdvertisementController.getAdvertisements);
router.get("/userAdvertisements", auth, AdvertisementController.getAdvertisementsByUser);

router.get("/:id", AdvertisementController.getAdvertisementsById);
router.delete("/:id", auth, AdvertisementController.deleteAdvertisement);
router.put("/:id", auth, multer, AdvertisementController.updateAdvertisement);

module.exports = router;