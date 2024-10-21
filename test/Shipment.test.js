const Shipment = artifacts.require("Shipment");

contract("Shipment", (accounts) => {
  let shipmentInstance;

  before(async () => {
    shipmentInstance = await Shipment.deployed();
  });

  it("should update shipment correctly", async () => {
    await shipmentInstance.updateShipment("PROD123", "New York", "In Transit", {
      from: accounts[0],
    });
    const history = await shipmentInstance.getShipmentHistory("PROD123");

    assert.equal(
      history[0].currentLocation,
      "New York",
      "Location should match"
    );
    assert.equal(
      history[0].status,
      "In Transit",
      "Status should be 'In Transit'"
    );
  });
});
