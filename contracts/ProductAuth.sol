// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductAuth {
    struct Product {
        string productId;
        string manufacturer;
        bool exists;
    }

    mapping(string => Product) public products;

    event ProductRegistered(string productId, string manufacturer);

    function registerProduct(string memory productId, string memory manufacturer) public {
        require(!products[productId].exists, "Product already registered");
        products[productId] = Product(productId, manufacturer, true);
        emit ProductRegistered(productId, manufacturer);
    }

    function authenticateProduct(string memory productId) public view returns (Product memory) {
        require(products[productId].exists, "Product does not exist");
        return products[productId];
    }
}
