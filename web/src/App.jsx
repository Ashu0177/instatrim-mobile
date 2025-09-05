// web/src/App.jsx
import React from "react";

function App() {
  return (
    <div style={{
      fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      textAlign: "center",
      marginTop: 80,
      padding: "0 20px",
      color: "#111"
    }}>
      <h1 style={{ fontSize: 48, margin: 0 }}>Instatrim</h1>
      <p style={{ fontSize: 18, marginTop: 12, opacity: 0.85 }}>
        Shoot • Edit • Publish — Instantly
      </p>

      <div style={{
        marginTop: 40,
        display: "inline-block",
        textAlign: "left",
        maxWidth: 560,
        lineHeight: 1.6
      }}>
        <h3 style={{ marginBottom: 6 }}>Quick start (MVP)</h3>
        <ul>
          <li>Import or record a video</li>
          <li>Trim / Cut / Merge</li>
          <li>Export in common resolutions</li>
        </ul>
        <p style={{ marginTop: 12, fontSize: 14, color: "#555" }}>
          This is a placeholder landing screen for the web scaffold. Replace with the full editor UI in the next iteration.
        </p>
      </div>
    </div>
  );
}

export default App;
