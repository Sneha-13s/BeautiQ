const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
const salonRoutes = require("./routes/salonRoutes");

app.use("/api/users", userRoutes);
app.use("/api/salons", salonRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("BeautiQ Backend Running ");
});

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});