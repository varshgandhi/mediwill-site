"use client";

import { motion } from "framer-motion";

export default function CardiacSection() {
  return (
    <section
      id="next-section"
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
      {/* BLACK BASE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#000",
        }}
      />

      {/* ECG LINE (SUBTLE ANIMATION) */}
      <motion.div
        animate={{
          x: ["-20%", "0%"],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          width: "60%",
          height: "120px",
          background: "url('/ecg.png') no-repeat center",
          backgroundSize: "contain",
          zIndex: 2,
          opacity: 0.7,
          filter: "drop-shadow(0 0 10px rgba(255,40,40,0.6))",
        }}
      />

      {/* HEART IMAGE */}
      <img
        src="/heart.jpg"
        alt="Cardiac"
        style={{
          position: "absolute",
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          height: "85%",
          objectFit: "contain",
          zIndex: 3,
          mixBlendMode: "screen",
          filter: "brightness(1.1) contrast(1.2)",
        }}
      />

      {/* SOFT GLOW */}
      <div
        style={{
          position: "absolute",
          right: "10%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(255,40,40,0.25), transparent 70%)",
          filter: "blur(120px)",
          zIndex: 1,
        }}
      />

      {/* FADE BLEND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, #000 35%, rgba(0,0,0,0.6) 55%, transparent 80%)",
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
              "linear-gradient(to bottom, #ffffff, #fca5a5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Cardiac & Diabetes Division
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
          Precision Cardiac Care. <br />
          Better Outcomes.
        </motion.p>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{
            boxShadow: "0 0 40px rgba(255,40,40,0.5)",
            scale: 1.03,
          }}
          whileTap={{ scale: 0.96 }}
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,40,40,0.15)",
            color: "#fff",
            backdropFilter: "blur(20px)",
            cursor: "pointer",
          }}
        >
          Explore Cardiac Range
        </motion.button>
      </div>
    </section>
  );
}