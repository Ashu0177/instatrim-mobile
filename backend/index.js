 // backend/index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

// Health check route
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Example features route
app.get("/features", (req, res) => {
  res.json({
    features: [
      "Fast trimming & merging",
      "AI auto-cut & captions (coming)",
      "Basic filters & audio controls"
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
