 // web/src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1 style={{ textAlign: "center", marginTop: 50 }}>🏠 HOME PAGE</h1>;
}

function Features() {
  return <h1 style={{ textAlign: "center", marginTop: 50 }}>✨ FEATURES PAGE</h1>;
}

function App() {
  return (
    <div>
      <nav style={{ padding: 20 }}>
        <Link to="/" style={{ marginRight: 15 }}>Home</Link>
        <Link to="/features">Features</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </div>
  );
}

export default App;
