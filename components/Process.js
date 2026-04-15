"use client";

import { motion } from "framer-motion";

const steps = [
  "Identify Clinical Gap",
  "Research & Design",
  "Partner Manufacturing",
  "Deliver to Market",
];

export default function Process() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #020617, #0A2540)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>
        How Mediwill Works
      </h2>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            style={{
              padding: "20px 30px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {step}
          </motion.div>
        ))}
      </div>
    </section>
  );
}