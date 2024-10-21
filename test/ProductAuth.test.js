const ProductAuth = artifacts.require("ProductAuth");

contract("ProductAuth", (accounts) => {
  let productAuthInstance;

  before(async () => {
    productAuthInstance = await ProductAuth.deployed();
  });

  it("should register product correctly", async () => {
    await productAuthInstance.registerProduct("PROD123", "Manufacturer A");
    const product = await productAuthInstance.authenticateProduct("PROD123");

    assert.equal(product.productId, "PROD123", "Product ID should match");
    assert.equal(
      product.manufacturer,
      "Manufacturer A",
      "Manufacturer should match"
    );
  });
});
