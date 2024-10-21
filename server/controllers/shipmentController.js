const Shipment = require("../models/shipment");

exports.trackShipment = async (req, res) => {
  const { productId } = req.body;
  try {
    const shipmentHistory = await Shipment.find({ productId });
    res.json(shipmentHistory);
  } catch (error) {
    res.status(500).json({ error: "Error fetching shipment history" });
  }
};
