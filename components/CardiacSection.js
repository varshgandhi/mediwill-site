"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import CardiacProducts from "./CardiacProducts";

export default function CardiacSection() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // auto scroll when expanded
  useEffect(() => {
    if (open && ref.current) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [open]);

  return (
    <section
      id="cardiac"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "#000",
      }}
    >
      {/* HERO */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 8%",
          position: "relative",
        }}
      >
        {/* BACKGROUND DIM */}
        <motion.div
          animate={{ opacity: open ? 0.85 : 1 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "#000",
            zIndex: 0,
          }}
        />

        {/* ECG LINE */}
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

        {/* HEART (DEPTH EFFECT) */}
        <motion.img
          src="/heart.jpg"
          alt="Cardiac"
          animate={{
            x: open ? 80 : 0,
            scale: open ? 0.9 : 1,
            opacity: open ? 0.6 : 1,
          }}
          transition={{ duration: 0.7 }}
          style={{
            position: "absolute",
            right: "-5%",
            top: "50%",
            transform: "translateY(-50%)",
            height: "85%",
            objectFit: "contain",
            zIndex: 3,
            mixBlendMode: "screen",
          }}
        />

        {/* GLOW TRANSITION */}
        <motion.div
          animate={{
            background: open
              ? "radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%)"
              : "radial-gradient(circle, rgba(255,40,40,0.25), transparent 70%)",
          }}
          transition={{ duration: 0.6 }}
          style={{
            position: "absolute",
            right: "10%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "500px",
            height: "500px",
            filter: "blur(120px)",
            zIndex: 1,
          }}
        />

        {/* FADE */}
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
        <div style={{ position: "relative", zIndex: 10, maxWidth: "520px" }}>
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "56px",
              fontWeight: "600",
              background: "linear-gradient(to bottom, #ffffff, #fca5a5)",
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
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
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
            {open ? "Close Range ↑" : "Explore Cardiac Range ↓"}
          </motion.button>
        </div>
      </div>

      {/* EXPAND SECTION */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              overflow: "hidden",
              background: "#000",
            }}
          >
            <CardiacProducts />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}