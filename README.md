# Blockchain Shipment Tracking

This project implements a blockchain-based shipment tracking system using smart contracts and a React front-end.

## Features

- Track shipment history.
- Authenticate products.
- Admin-only updates for shipments.

## Contracts

- `Shipment.sol`: Manages shipment updates and history.
- `ProductAuth.sol`: Handles product registration and authentication.
- `AccessControl.sol`: Controls access permissions.

## Getting Started

### Prerequisites

- Node.js
- Truffle
- Ganache (for local development)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install server dependencies:
    ```bash
    cd server
    npm install
    ```
3. Install client dependencies:
    ```bash
    cd client
    npm install
    ```

### Running the Project
1. Start the MongoDB server.

2. Start the backend server:
    ```bash
    cd server
    npm run dev
    ```

3. tart Ganache for local Ethereum network.

4. Deploy the contracts:
    ```bash
    truffle migrate --network development
    ```

5. Start the React application:
    ```bash
    cd client
    npm start
    ```

Visit http://localhost:3000 to access the application.

## License
This project is licensed under the MIT License.


### Notes:
1. Replace `YOUR_CONTRACT_ADDRESS` in the client code with the actual deployed contract address.
2. Create a `secrets.json` file in the root directory for sensitive information, such as your Infura Project ID and mnemonic:
   ```json
   {
       "infuraProjectId": "YOUR_INFURA_PROJECT_ID",
       "mnemonic": "YOUR_MNEMONIC_PHRASE"
   }
3. Ensure that you have the required tools installed (Node.js, Truffle, Ganache, MongoDB).
