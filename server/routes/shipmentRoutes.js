const express = require("express");
const router = express.Router();
const shipmentController = require("../controllers/shipmentController");

router.post("/track", shipmentController.trackShipment);

module.exports = router;
