const express = require("express");
const mongoose = require("mongoose");
const shipmentRoutes = require("./routes/shipmentRoutes");

const app = express();
app.use(express.json());
app.use("/api/shipments", shipmentRoutes);

mongoose
  .connect("mongodb://localhost:27017/shipmentTracking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
