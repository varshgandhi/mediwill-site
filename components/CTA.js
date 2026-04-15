"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section" style={{ position: "relative" }}>

      {/* 🔥 BIG GLOW */}
      <div style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        background: "rgba(255,0,100,0.25)",
        filter: "blur(200px)",
        top: "10%",
        left: "20%",
      }}/>

      <div style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        background: "rgba(0,150,255,0.25)",
        filter: "blur(200px)",
        bottom: "10%",
        right: "20%",
      }}/>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glow-text"
        style={{ fontSize: "42px", zIndex: 2 }}
      >
        Shaping the Future of Healthcare
      </motion.h2>

      <div style={{ marginTop: "30px", display: "flex", gap: "20px", zIndex: 2 }}>
        <button style={{
          padding: "14px 28px",
          borderRadius: "30px",
          border: "1px solid rgba(255,255,255,0.4)",
          background: "rgba(255,255,255,0.05)",
          color: "white",
          backdropFilter: "blur(10px)"
        }}>
          Contact
        </button>

        <button style={{
          padding: "14px 28px",
          borderRadius: "30px",
          border: "1px solid rgba(255,255,255,0.4)",
          background: "rgba(255,255,255,0.05)",
          color: "white",
          backdropFilter: "blur(10px)"
        }}>
          Download Catalogue
        </button>
      </div>

    </section>
  );
}