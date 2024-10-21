const Shipment = artifacts.require("Shipment");
const AccessControl = artifacts.require("AccessControl");
const ProductAuth = artifacts.require("ProductAuth");

module.exports = function (deployer) {
  deployer
    .deploy(AccessControl)
    .then(() => {
      return deployer.deploy(Shipment);
    })
    .then(() => {
      return deployer.deploy(ProductAuth);
    });
};
