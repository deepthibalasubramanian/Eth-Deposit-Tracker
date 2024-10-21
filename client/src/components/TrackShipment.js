import React, { useState } from "react";
import BlockchainService from "../services/BlockchainService";

const TrackShipment = () => {
  const [productId, setProductId] = useState("");
  const [shipmentHistory, setShipmentHistory] = useState([]);

  const handleTrackShipment = async () => {
    const history = await BlockchainService.getShipmentHistory(productId);
    setShipmentHistory(history);
  };

  return (
    <div>
      <h2>Track Shipment</h2>
      <input
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Enter Product ID"
      />
      <button onClick={handleTrackShipment}>Track</button>
      <h3>Shipment History:</h3>
      <ul>
        {shipmentHistory.map((shipment, index) => (
          <li key={index}>
            Location: {shipment.currentLocation}, Status: {shipment.status},
            Timestamp: {new Date(shipment.timestamp * 1000).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackShipment;
