// web/src/App.jsx
import React from "react";

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
        padding: "16px 32px",
        fontSize: 20,
        fontWeight: "bold"
      }}>
        Instatrim
      </header>

      {/* Main content */}
      <main style={{
        flex: 1,
        textAlign: "center",
        marginTop: 60,
        padding: "0 20px"
      }}>
        <h1 style={{ fontSize: 42, margin: 0 }}>Shoot • Edit • Publish</h1>
        <p style={{ fontSize: 18, marginTop: 12, opacity: 0.85 }}>
          Instantly create and share your videos with AI-powered editing tools.
        </p>
      </main>

      {/* Footer */}
      <footer style={{
        background: "#f5f5f5",
        textAlign: "center",
        padding: "12px 20px",
        fontSize: 14,
        color: "#555"
      }}>
        © {new Date().getFullYear()} Instatrim. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
