import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Simple test route
app.get("/", (req, res) => {
  res.send("Instatrim Backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Instatrim backend listening at http://localhost:${PORT}`);
});
