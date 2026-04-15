"use client";

import { motion } from "framer-motion";

const items = [
  "Metabolic (Diabetes + Cardiac)",
  "Anti-infective",
  "Orthopedic",
  "Gynecology",
];

export default function Timeline() {
  return (
    <section
  style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #f8fafc, #e2e8f0)"
  }}
>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ display: "flex", gap: "50px", fontSize: "24px" }}
      >
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </motion.div>
    </section>
  );
}