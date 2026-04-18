// components/TrustBadges.js
"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";  // ← ADD THIS IMPORT

export default function TrustBadges() {
  const stats = [
    { 
      label: "Products Portfolio", 
      value: 100,        // ← Changed from "100+" to number
      suffix: "+",       // ← Added suffix
      desc: "Across 4 therapeutic divisions" 
    },
    { 
      label: "Therapeutic Areas", 
      value: 4,          // ← Changed from "4" to number
      suffix: "",        // ← No suffix
      desc: "Cardiac | Ortho | Anti-Infective | Gynecology" 
    },
    { 
      label: "Quality Standard", 
      value: "GMP",      // ← Keep as text (not a number)
      isText: true,      // ← Flag for text values
      desc: "Good Manufacturing Practices" 
    },
    { 
      label: "Innovation", 
      value: "1st-in-Class",  // ← Keep as text
      isText: true,           // ← Flag for text values
      desc: "Proprietary orthopedic molecule" 
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ 
        padding: "80px 8%", 
        background: "#000", 
        textAlign: "center", 
        borderTop: "1px solid rgba(255,255,255,0.05)", 
        borderBottom: "1px solid rgba(255,255,255,0.05)" 
      }}
    >
      <p style={{ 
        color: "#9ca3af", 
        letterSpacing: "3px", 
        marginBottom: "50px", 
        fontSize: "12px",
        fontWeight: "500"
      }}>
        OUR COMMITMENT TO EXCELLENCE
      </p>
      
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "60px", 
        flexWrap: "wrap",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {stats.map((stat, idx) => (
          <motion.div 
            key={stat.label} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", minWidth: "180px" }}
          >
            <div style={{ 
              fontSize: "42px", 
              fontWeight: "700", 
              background: "linear-gradient(135deg, #fff, #9ca3af)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "8px"
            }}>
              {/* WHERE TO ADD THE ANIMATED COUNTER - RIGHT HERE */}
              {stat.isText ? (
                stat.value  // Show "GMP" or "1st-in-Class" as normal text
              ) : (
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              )}
            </div>
            <div style={{ fontSize: "15px", color: "#fff", fontWeight: "500", marginBottom: "4px" }}>
              {stat.label}
            </div>
            <div style={{ fontSize: "12px", color: "#6b7280" }}>
              {stat.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}