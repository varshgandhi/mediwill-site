// components/Hero.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section" style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      background: "#000"
    }}>
      {/* Animated Gradient Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(125deg, #000000, #0a0a2a, #1a0a2a, #000000)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 12s ease infinite",
        zIndex: 0,
      }} />
      
      {/* Dark overlay for better text contrast */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.4)",
        zIndex: 1,
      }} />
      
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        width: "60%",
        height: "60%",
        background: "radial-gradient(ellipse at center, rgba(120,80,255,0.15), transparent 70%)",
        filter: "blur(120px)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
      }} />
      
      <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{
            fontSize: "14px",
            letterSpacing: "4px",
            color: "#7850ff",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "20px"
          }}>Precision Pharmaceuticals</span>
          
          <h1 style={{
            background: "linear-gradient(to bottom, #ffffff, #dbeafe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
            fontSize: "clamp(48px, 10vw, 80px)"
          }}>
            Will. For Life.
          </h1>
          
          <p style={{ color: "#9ca3af", fontSize: "clamp(16px, 4vw, 20px)", maxWidth: "600px", margin: "0 auto" }}>
            Because better healthcare begins with the will to care.
          </p>
          
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "40px", flexWrap: "wrap" }}>
            <button 
              className="btn btn-primary" 
              onClick={() => document.getElementById("cardiac")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Ecosystem →
            </button>
            
            <Link href="/about">
              <button className="btn btn-secondary">
                About Us →
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          position: "absolute", 
          bottom: "30px", 
          left: "50%", 
          transform: "translateX(-50%)", 
          cursor: "pointer", 
          zIndex: 10 
        }}
        onClick={() => document.getElementById("cardiac")?.scrollIntoView({ behavior: "smooth" })}
      >
        <div style={{ 
          width: "28px", 
          height: "45px", 
          border: "1.5px solid rgba(255,255,255,0.25)", 
          borderRadius: "24px", 
          position: "relative",
          backdropFilter: "blur(4px)"
        }}>
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              width: "4px", 
              height: "10px", 
              background: "#fff", 
              borderRadius: "2px", 
              position: "absolute", 
              top: "8px", 
              left: "50%", 
              transform: "translateX(-50%)" 
            }} 
          />
        </div>
        <p style={{ 
          fontSize: "10px", 
          color: "#6b7280", 
          marginTop: "8px", 
          letterSpacing: "2px",
          textTransform: "uppercase"
        }}>
          Scroll
        </p>
      </motion.div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}