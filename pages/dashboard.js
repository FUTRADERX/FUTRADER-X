export default function Dashboard() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh", color: "#00ffcc", display: "flex", padding: "20px" }}>
      
      {/* Sidebar */}
      <div style={{ width: "220px", borderRight: "1px solid #222", paddingRight: "20px" }}>
        <h2 style={{ textShadow: "0 0 8px #00ffcc" }}>FUTRADERX</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "20px 0", color: "#00ffcc" }}>Dashboard</li>
          <li style={{ margin: "20px 0", color: "#888" }}>My Challenges</li>
          <li style={{ margin: "20px 0", color: "#888" }}>Payouts</li>
          <li style={{ margin: "20px 0", color: "#888" }}>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "0 30px" }}>
        <h1 style={{ fontSize: "28px", textShadow: "0 0 10px #00ffcc" }}>Performance</h1>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
          <Card label="Account Balance" value="$62,500" />
          <Card label="Profit Target" value="$75,000" />
          <Card label="Max Daily Loss" value="-$2,500" />
          <Card label="Drawdown" value="-$3,200" />
        </div>
      </div>
    </div>
  );
}

function Card({ label, value }) {
  return (
    <div style={{
      flex: "1 1 220px",
      backgroundColor: "#111",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 15px rgba(0,255,204,0.2)"
    }}>
      <h3 style={{ fontSize: "14px", color: "#999" }}>{label}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold", marginTop: "10px", color: "#00ffcc", textShadow: "0 0 10px #00ffcc" }}>
        {value}
      </p>
    </div>
  );
}
