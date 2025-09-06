 function Features() {
  const [features, setFeatures] = React.useState([]);

  React.useEffect(() => {
    fetch("https://super-duper-spork-r4vrw9wg6776fqjw-3000.app.github.dev/features")
      .then((res) => res.json())
      .then((data) => setFeatures(data.features))
      .catch((err) => console.error("Error fetching features:", err));
  }, []);

  return (
    <main style={{ textAlign: "center", marginTop: 60, padding: "0 20px" }}>
      <h1>Features</h1>
      <ul style={{ marginTop: 20, textAlign: "left", display: "inline-block" }}>
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </main>
  );
}
