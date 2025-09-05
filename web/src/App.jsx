 // web/src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: 60, padding: "0 20px" }}>
      <h1>Shoot • Edit • Publish</h1>
      <p style={{ fontSize: 18, marginTop: 12, opacity: 0.85 }}>
        Instantly create and share your videos with AI-powered editing tools.
      </p>
    </main>
  );
}

function Features() {
  return (
    <main style={{ textAlign: "center", marginTop: 60, padding: "0 20px" }}>
      <h1>Features</h1>
      <ul style={{ marginTop: 20, textAlign: "left", display: "inline-block" }}>
        <li>Fast trimming & merging</li>
        <li>AI auto-cut & captions (coming)</li>
        <li>Basic filters & audio controls</li>
      </ul>
    </main>
  );
}

function App() {
  return (
    <div style={{
      fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "#111",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <header style={{
        background: "#111",
        color: "#fff",
        padding: "12px 20px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>Instatrim</div>
          <nav style={{ display: "flex", alignItems: "center" }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none", marginLeft: 18 }}>Home</Link>
            <Link to="/features" style={{ color: "#fff", textDecoration: "none", marginLeft: 18 }}>Features</Link>
          </nav>
        </div>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Routes>

      {/* Footer */}
      <footer style={{
        background: "#f5f5f5",
        textAlign: "center",
        padding: "12px 20px",
        fontSize: 14,
        color: "#555",
        marginTop: "auto"
      }}>
        © {new Date().getFullYear()} Instatrim. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
