export default function Ecosystem() {
  return (
    <div style={{ padding: "120px 8%", background: "#000" }}>
      <h1 style={{ fontSize: "64px", marginBottom: "40px" }}>The Mediwill Ecosystem</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
        {[
          { title: "Smart Delivery", desc: "Connected auto-injectors with adherence tracking", icon: "💉" },
          { title: "Patient App", desc: "Real-time dosing reminders and side effect logging", icon: "📱" },
          { title: "Clinician Dashboard", desc: "Population health insights from anonymized data", icon: "📊" },
          { title: "Cold Chain IoT", desc: "Blockchain-verified temperature monitoring", icon: "❄️" }
        ].map(item => (
          <div key={item.title} style={{ padding: "30px", background: "rgba(255,255,255,0.03)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>{item.icon}</div>
            <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>{item.title}</h3>
            <p style={{ color: "#9ca3af" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}