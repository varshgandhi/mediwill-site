// app/about/page.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ background: "#000", minHeight: "100vh" }}>
      {/* Simple Back Button */}
      <div style={{ padding: "30px 8% 0" }}>
        <Link href="/" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px" }}>
          ← Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section style={{ padding: "60px 8% 40px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span style={{ color: "#7850ff", fontSize: "14px", letterSpacing: "3px" }}>OUR STORY</span>
          <h1 style={{ fontSize: "56px", marginTop: "20px", marginBottom: "20px", fontWeight: "600" }}>
            Will. For Life.
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "18px", maxWidth: "700px", lineHeight: "1.6" }}>
            Mediwill is built on a simple belief: better healthcare begins with the will to care. 
            We are a pharmaceutical company dedicated to precision, quality, and patient-first innovation.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision Cards */}
      <section style={{ padding: "60px 8%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ padding: "40px", background: "rgba(255,255,255,0.03)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div style={{ fontSize: "48px", marginBottom: "20px" }}>🎯</div>
          <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>Our Mission</h2>
          <p style={{ color: "#9ca3af", lineHeight: "1.6" }}>
            To develop and deliver precision pharmaceuticals that improve patient outcomes 
            across cardiac, orthopedic, anti-infective, and gynecology therapeutic areas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ padding: "40px", background: "rgba(255,255,255,0.03)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div style={{ fontSize: "48px", marginBottom: "20px" }}>👁️</div>
          <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>Our Vision</h2>
          <p style={{ color: "#9ca3af", lineHeight: "1.6" }}>
            To be the most trusted pharmaceutical partner in India, known for innovation, 
            quality, and an unwavering commitment to patient health.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section style={{ padding: "60px 8%", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span style={{ color: "#7850ff", fontSize: "12px", letterSpacing: "3px" }}>WHAT WE BELIEVE</span>
          <h2 style={{ fontSize: "36px", marginTop: "20px", marginBottom: "50px" }}>Our Core Values</h2>
        </motion.div>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap" }}>
          {[
            { title: "Quality First", desc: "Uncompromising GMP standards", icon: "🔬" },
            { title: "Patient-Centric", desc: "Every decision starts with patients", icon: "❤️" },
            { title: "Scientific Integrity", desc: "Evidence-based approach", icon: "📊" },
            { title: "Partnership", desc: "Building lasting relationships", icon: "🤝" }
          ].map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", minWidth: "160px" }}
            >
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>{value.icon}</div>
              <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{value.title}</h3>
              <p style={{ fontSize: "13px", color: "#6b7280" }}>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "80px 8%", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "80px", flexWrap: "wrap" }}>
          {[
            { value: "100+", label: "Products" },
            { value: "4", label: "Therapeutic Areas" },
            { value: "GMP", label: "Quality Certified" }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ fontSize: "52px", fontWeight: "700", color: "#7850ff" }}>{stat.value}</div>
              <div style={{ fontSize: "14px", color: "#9ca3af", marginTop: "8px" }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}