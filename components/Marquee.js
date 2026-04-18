// components/Marquee.js
"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  // Replace with your actual key molecules
  const molecules = [
    "Metformin ER", "Atorvastatin", "Cefixime", 
    "Azithromycin", "Diclofenac SR", "Tranexamic Acid",
    "Telmisartan", "Ofloxacin", "Etoricoxib", "Drotaverine"
  ];
  
  return (
    <div style={{ 
      overflow: "hidden", 
      padding: "18px 0", 
      background: "rgba(255,255,255,0.01)", 
      borderTop: "1px solid rgba(255,255,255,0.03)", 
      borderBottom: "1px solid rgba(255,255,255,0.03)",
      position: "relative"
    }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: "40px", width: "fit-content" }}
      >
        {[...molecules, ...molecules].map((m, i) => (
          <span 
            key={i} 
            style={{ 
              color: "#6b7280", 
              fontSize: "13px", 
              letterSpacing: "1px",
              whiteSpace: "nowrap"
            }}
          >
            {m} 
            <span style={{ marginLeft: "40px", color: "#3a3a4a" }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}