const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  currentLocation: { type: String, required: true },
  status: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Shipment", shipmentSchema);
