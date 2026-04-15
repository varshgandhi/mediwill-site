"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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

      {/* MAIN LIGHT */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(120,80,255,0.35), transparent 70%)",
          filter: "blur(120px)",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* SIDE LIGHT */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(circle at left, rgba(0,120,255,0.25), transparent 60%)",
          filter: "blur(100px)",
          top: "40%",
          left: "20%",
        }}
      />

      {/* BOTTOM LIGHT */}
      <div
        style={{
          position: "absolute",
          width: "80%",
          height: "120px",
          background:
            "radial-gradient(ellipse at center, rgba(120,80,255,0.6), transparent 70%)",
          bottom: "-40px",
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(40px)",
        }}
      />

      {/* VIGNETTE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle, transparent 20%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        {/* MICRO GLOW */}
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "120px",
            background: "rgba(120,120,255,0.35)",
            filter: "blur(100px)",
            top: "25%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: -1,
          }}
        />

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "64px",
            fontWeight: "600",
            letterSpacing: "-1px",
            background:
              "linear-gradient(to bottom, #ffffff, #dbeafe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(255,255,255,0.15)",
          }}
        >
          Will. For Life.
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: "20px",
            color: "#94a3b8",
            fontSize: "18px",
          }}
        >
          Because better healthcare begins with the will to care.
        </motion.p>

        {/* BUTTONS */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {/* PURPLE BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            style={{
              padding: "14px 32px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.1)",
              background:
                "linear-gradient(90deg, rgba(120,80,255,0.3), rgba(255,255,255,0.05))",
              color: "#fff",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 40px rgba(120,80,255,0.5)",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={() => {
              document
                .getElementById("next-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Products
          </motion.button>

          {/* BLUE BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            style={{
              padding: "14px 32px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.1)",
              background:
                "linear-gradient(90deg, rgba(0,120,255,0.3), rgba(255,255,255,0.05))",
              color: "#fff",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 40px rgba(0,120,255,0.5)",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            View Range
          </motion.button>
        </div>
      </div>
    </section>
  );
}