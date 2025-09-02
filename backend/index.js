// backend/index.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (parse JSON)
app.use(express.json());

// Test route
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
