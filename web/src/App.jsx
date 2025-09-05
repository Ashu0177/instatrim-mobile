// web/src/App.jsx
import React from "react";

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  marginLeft: 18,
  fontSize: 15,
  opacity: 0.95
};

function App() {
  const openDocs = () =>
    window.open(
      "https://github.com/Ashu0177/instatrim-mobile/tree/main/docs",
      "_blank"
    );

  return (
    <div style={{
      fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "#111",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      {/* Header / Nav */}
      <header style={{
        background: "#111",
        color: "#fff",
        padding: "12px 20px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>Instatrim</div>
          <nav style={{ display: "flex", alignItems: "center" }}>
            <a href="#home" style={linkStyle}>Home</a>
            <a href="#features" style={linkStyle}>Features</a>
            <a href="#docs" onClick={(e) => { e.preventDefault(); openDocs(); }} style={linkStyle}>Docs</a>
            <a href="mailto:karthimkalaiselvan@gmail.com" style={linkStyle}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="home" style={{
        flex: 1,
        textAlign: "center",
        marginTop: 48,
        padding: "0 20px"
      }}>
        <h1 style={{ fontSize: 42, margin: 0 }}>Shoot • Edit • Publish</h1>
        <p style={{ fontSize: 18, marginTop: 12, opacity: 0.85 }}>
          Instantly create and share your videos with AI-powered editing tools.
        </p>

        <div style={{
          marginTop: 36,
          display: "inline-block",
          textAlign: "left",
          maxWidth: 760,
          lineHeight: 1.6,
          background: "#fff",
          padding: 20,
          borderRadius: 8,
          boxShadow: "0 6px 18px rgba(17,17,17,0.06)"
        }}>
          <h3 style={{ marginBottom: 8 }}>Quick start (MVP)</h3>
          <ul>
            <li>Import or record a video</li>
            <li>Trim / Cut / Merge</li>
            <li>Export in common resolutions</li>
          </ul>

          <h3 id="features" style={{ marginTop: 18 }}>Features (snapshot)</h3>
          <ul>
            <li>Fast trimming & merging</li>
            <li>AI auto-cut & captions (coming)</li>
            <li>Basic filters & audio controls</li>
          </ul>

          <p style={{ marginTop: 12, fontSize: 14, color: "#555" }}>
            Click <a href="#" onClick={(e) => { e.preventDefault(); openDocs(); }}>Docs</a> to view product docs and roadmap on GitHub.
          </p>
        </div>
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
