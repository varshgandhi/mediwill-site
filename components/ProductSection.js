// components/ProductSection.js
"use client";
import { motion } from "framer-motion";

const themes = {
  cardiac: { 
    accent: "#ff3c3c", 
    gradient: "to right, #ffffff, #fca5a5", 
    image: "/heart.jpg", 
    glowColor: "rgba(255,60,60,0.25)"
  },
  ortho: { 
    accent: "#008cff", 
    gradient: "to right, #ffffff, #7dd3fc", 
    image: "/knee.png", 
    glowColor: "rgba(0,140,255,0.25)"
  },
  infective: { 
    accent: "#22c55e", 
    gradient: "to right, #ffffff, #86efac", 
    image: "/shield.png", 
    glowColor: "rgba(34,197,94,0.25)"
  },
  gyneco: { 
    accent: "#ff69b4", 
    gradient: "to right, #ffffff, #fbcfe8", 
    image: "/placeholder.png", 
    glowColor: "rgba(255,105,180,0.25)"
  }
};

export default function ProductSection({ id, title, subtitle, tagline, theme, imageAlt }) {
  const t = themes[theme];
  
  return (
    <section id={id} style={{
      height: "100vh",
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: "0 8%",
      background: "#000",
      overflow: "hidden"
    }}>
      {/* Ambient glow background */}
      <div style={{
        position: "absolute",
        right: "10%",
        top: "50%",
        transform: "translateY(-50%)",
        width: "500px",
        height: "500px",
        background: `radial-gradient(circle, ${t.glowColor}, transparent 70%)`,
        filter: "blur(120px)",
        zIndex: 1
      }} />
      
      {/* Image with edge fade */}
      <img 
        src={t.image} 
        alt={imageAlt} 
        style={{
          position: "absolute",
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          height: "85%",
          objectFit: "contain",
          zIndex: 2,
          mixBlendMode: "screen",
          filter: "brightness(1.1) contrast(1.2)",
          WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)",
          maskImage: "linear-gradient(to left, black 60%, transparent 100%)"
        }} 
      />
      
      {/* Left side fade gradient */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, #000 30%, rgba(0,0,0,0.85) 50%, transparent 75%)",
        zIndex: 3
      }} />
      
      {/* Content */}
      <div style={{ 
        position: "relative", 
        zIndex: 10, 
        maxWidth: "520px" 
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: "56px",
            fontWeight: "600",
            letterSpacing: "-1px",
            background: `linear-gradient(${t.gradient})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px"
          }}
        >
          {title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          style={{ 
            color: "#9ca3af", 
            fontSize: "18px", 
            marginBottom: "30px",
            lineHeight: "1.6"
          }}
        >
          {subtitle}<br />
          {tagline}
        </motion.p>
        
        {/* Button - NO TOOLTIP */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: `0 0 50px ${t.accent}`,
            scale: 1.02,
            background: `${t.accent}30`
          }}
          whileTap={{ scale: 0.98 }}
          style={{ 
            marginTop: "10px",
            padding: "14px 32px",
            borderRadius: "999px",
            border: `1px solid ${t.accent}50`,
            background: `${t.accent}15`,
            color: "#fff",
            backdropFilter: "blur(20px)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontWeight: "500",
            fontSize: "16px",
            boxShadow: `0 0 25px ${t.accent}30`,
          }}
          onClick={() => {
            if (id === "ortho") {
              window.location.href = "/ortho";
            } else {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {id === "ortho" ? "Learn About Research Molecule →" : `Explore ${title} →`}
        </motion.button>
      </div>
    </section>
  );
}