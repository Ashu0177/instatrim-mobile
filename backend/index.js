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
// GET /features - return app feature list
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
