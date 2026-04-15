"use client";

import { motion } from "framer-motion";

export default function AntiInfectiveSection() {
  return (
    <section
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "0 8%",
        background: "#000",
      }}
    >
      {/* BASE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#000",
        }}
      />

      {/* AMBIENT GREEN GLOW */}
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.18), transparent 70%)",
          filter: "blur(140px)",
          zIndex: 1,
        }}
      />

      {/* CORE SHIELD GLOW */}
      <div
        style={{
          position: "absolute",
          right: "18%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "220px",
          height: "220px",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.45), transparent 70%)",
          filter: "blur(60px)",
          zIndex: 2,
        }}
      />

      {/* SUBTLE PROTECTION RING */}
      <motion.div
        animate={{
          scale: [0.9, 1.1],
          opacity: [0.25, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeOut",
        }}
        style={{
          position: "absolute",
          right: "18%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          border: "1px solid rgba(34,197,94,0.25)",
          zIndex: 2,
        }}
      />

      {/* SHIELD IMAGE (EMBEDDED) */}
      <img
        src="/shield.png"
        alt="Anti Infective"
        style={{
          position: "absolute",
          right: "-8%",
          top: "50%",
          transform: "translateY(-50%)",
          height: "85%",
          objectFit: "contain",
          zIndex: 3,

          // BLENDING
          mixBlendMode: "screen",
          filter: "brightness(1.15) contrast(1.2)",

          // EDGE FADE
          WebkitMaskImage:
            "linear-gradient(to left, black 60%, transparent 100%)",
          maskImage:
            "linear-gradient(to left, black 60%, transparent 100%)",
        }}
      />

      {/* FADE BLEND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, #000 30%, rgba(0,0,0,0.85) 50%, transparent 75%)",
          zIndex: 4,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "520px",
        }}
      >
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: "56px",
            fontWeight: "600",
            letterSpacing: "-1px",
            background:
              "linear-gradient(to bottom, #ffffff, #86efac)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Anti-Infective & Critical Care
        </motion.h1>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            marginTop: "20px",
            color: "#9ca3af",
            fontSize: "18px",
          }}
        >
          Precision Therapy. <br />
          Complete Protection.
        </motion.p>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{
            boxShadow: "0 0 40px rgba(34,197,94,0.4)",
            scale: 1.03,
          }}
          whileTap={{ scale: 0.96 }}
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(34,197,94,0.15)",
            color: "#fff",
            backdropFilter: "blur(20px)",
            cursor: "pointer",
          }}
        >
          Explore Anti-Infective Range
        </motion.button>
      </div>
    </section>
  );
}