// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./AccessControl.sol";

contract Shipment is AccessControl {
    struct ShipmentDetails {
        string productId;
        string currentLocation;
        string status;
        uint256 timestamp;
    }

    mapping(string => ShipmentDetails[]) public shipmentHistory;

    event ShipmentUpdated(string productId, string location, string status, uint256 timestamp);

    function updateShipment(string memory productId, string memory currentLocation, string memory status) public onlyAdmin {
        ShipmentDetails memory newShipment = ShipmentDetails({
            productId: productId,
            currentLocation: currentLocation,
            status: status,
            timestamp: block.timestamp
        });
        shipmentHistory[productId].push(newShipment);
        emit ShipmentUpdated(productId, currentLocation, status, block.timestamp);
    }

    function getShipmentHistory(string memory productId) public view returns (ShipmentDetails[] memory) {
        return shipmentHistory[productId];
    }
}
