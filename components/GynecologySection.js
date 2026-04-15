"use client";

import { motion } from "framer-motion";

export default function GynecologySection() {
  return (
    <section
      style={{
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "0 8%",
        background: "#000",
        overflow: "hidden",
      }}
    >
      {/* 🔥 BACKGROUND GLOW (BEHIND EVERYTHING) */}
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255, 105, 180, 0.25) 0%, transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0, // ✅ FIXED
        }}
      />

      {/* SOFT GRADIENT BLEND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, #000 45%, rgba(255, 20, 147, 0.08) 100%)",
          zIndex: 1, // ✅ below content
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 5, // ✅ ABOVE everything → clickable
          maxWidth: "600px",
        }}
      >
        {/* HEADING (consistent with others) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "64px",
            fontWeight: "600",
            lineHeight: "1.1",
            letterSpacing: "-1px",
            color: "#f8fafc", // ✅ FIXED (not pink heavy)
            marginBottom: "20px",
          }}
        >
          Gynecology Division
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "18px",
            color: "#94a3b8", // ✅ consistent grey
            marginBottom: "40px",
          }}
        >
          Care Designed for Women. <br />
          Trusted for Life.
        </motion.p>

        {/* BUTTON (consistent with others) */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            padding: "14px 32px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.05)",
            color: "#fff",
            backdropFilter: "blur(10px)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 25px rgba(255,105,180,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Explore Women’s Range
        </motion.button>
      </div>
    </section>
  );
}