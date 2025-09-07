 // web/src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: 60, padding: "0 20px" }}>
      <h1 style={{ fontSize: 36, margin: 0 }}>Instatrim</h1>
      <p style={{ fontSize: 16, marginTop: 12, opacity: 0.85 }}>
        Shoot • Edit • Publish — Instantly create and share your videos with AI-powered editing tools.
      </p>
    </main>
  );
}

function Features() {
  const [features, setFeatures] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let mounted = true;

    // Build a list of candidate URLs (try in order)
    const candidates = [
      "/features", // relative
      `${window.location.protocol}//${window.location.hostname}:3000/features`, // localhost:3000
    ];

    // If Codespaces style origin (contains -<port>.app.github.dev), try replacing with -3000
    if (/\.app\.github\.dev$/.test(window.location.origin)) {
      const backendOrigin = window.location.origin.replace(/-\d+\.app\.github\.dev$/, "-3000.app.github.dev");
      candidates.push(`${backendOrigin}/features`);
    }

    // Try each candidate sequentially
    (async () => {
      for (const url of candidates) {
        try {
          const res = await fetch(url, { cache: "no-store" });
          if (!mounted) return;
          if (!res.ok) {
            // try next candidate
            continue;
          }
          const data = await res.json();
          if (mounted) {
            setFeatures(Array.isArray(data.features) ? data.features : data);
            setError(null);
          }
          return;
        } catch (err) {
          // network error -> try next candidate
          // continue
        }
      }
      if (mounted) {
        setError("Unable to reach backend. Open backend or check console for details.");
        setFeatures([]);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main style={{ textAlign: "center", marginTop: 40, padding: "0 20px" }}>
      <h2>Features</h2>

      {features === null && !error && <p>Loading features…</p>}

      {error && (
        <div style={{ color: "#a00", marginTop: 12 }}>
          <strong>{error}</strong>
          <div style={{ marginTop: 8, fontSize: 13, color: "#666" }}>
            Suggested: ensure backend is running (backend: `npm start`) and use the Codespaces forwarded backend URL if needed.
          </div>
        </div>
      )}

      {features && features.length > 0 && (
        <ul style={{ marginTop: 16, textAlign: "left", display: "inline-block" }}>
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      {features && features.length === 0 && !error && (
        <p style={{ marginTop: 12, color: "#666" }}>No features returned by the backend.</p>
      )}
    </main>
  );
}

export default function App() {
  return (
    <div
      style={{
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        color: "#111",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header style={{ background: "#111", color: "#fff", padding: "12px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Instatrim</div>
          <nav>
            <Link to="/" style={{ color: "#fff", textDecoration: "none", marginLeft: 12 }}>Home</Link>
            <Link to="/features" style={{ color: "#fff", textDecoration: "none", marginLeft: 12 }}>Features</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Routes>

      <footer style={{ marginTop: "auto", background: "#f5f5f5", padding: "12px 20px", textAlign: "center", color: "#555" }}>
        © {new Date().getFullYear()} Instatrim — Shoot • Edit • Publish
      </footer>
    </div>
  );
}
