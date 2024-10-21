import Web3 from "web3";
import ShipmentArtifact from "../abis/Shipment.json";
import ProductAuthArtifact from "../abis/ProductAuth.json";

const web3 = new Web3(window.ethereum);

const ShipmentContract = new web3.eth.Contract(
  ShipmentArtifact.abi,
  "YOUR_CONTRACT_ADDRESS"
);
const ProductAuthContract = new web3.eth.Contract(
  ProductAuthArtifact.abi,
  "YOUR_CONTRACT_ADDRESS"
);

const BlockchainService = {
  getShipmentHistory: async (productId) => {
    return await ShipmentContract.methods.getShipmentHistory(productId).call();
  },
  authenticateProduct: async (productId) => {
    return await ProductAuthContract.methods
      .authenticateProduct(productId)
      .call();
  },
};

export default BlockchainService;
