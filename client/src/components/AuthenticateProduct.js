import React, { useState } from "react";
import BlockchainService from "../services/BlockchainService";

const AuthenticateProduct = () => {
  const [productId, setProductId] = useState("");
  const [productInfo, setProductInfo] = useState(null);

  const handleAuthenticateProduct = async () => {
    const product = await BlockchainService.authenticateProduct(productId);
    setProductInfo(product);
  };

  return (
    <div>
      <h2>Authenticate Product</h2>
      <input
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Enter Product ID"
      />
      <button onClick={handleAuthenticateProduct}>Authenticate</button>
      {productInfo && (
        <div>
          <h3>Product Info:</h3>
          <p>Product ID: {productInfo.productId}</p>
          <p>Manufacturer: {productInfo.manufacturer}</p>
        </div>
      )}
    </div>
  );
};

export default AuthenticateProduct;
