import React from "react";
import TrackShipment from "./TrackShipment";
import AuthenticateProduct from "./AuthenticateProduct";

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <TrackShipment />
      <AuthenticateProduct />
    </div>
  );
};

export default UserDashboard;
