"use client";

import { motion } from "framer-motion";

export default function Ortho() {
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* 🔥 BIG GLOW BACKGROUND */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background: "rgba(0,150,255,0.25)",
          filter: "blur(200px)",
          top: "10%",
          left: "20%",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background: "rgba(150,0,255,0.25)",
          filter: "blur(200px)",
          bottom: "10%",
          right: "20%",
        }}
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          zIndex: 2,
          maxWidth: "800px",
        }}
      >
        <h2
          style={{
            fontSize: "44px",
            textShadow: "0 0 25px rgba(255,255,255,0.4)",
          }}
        >
          Redefining Arthritis Treatment
        </h2>

        <p style={{ marginTop: "20px", opacity: 0.8 }}>
          First-of-its-kind composition delivering outstanding results.
        </p>
      </motion.div>
    </section>
  );
}