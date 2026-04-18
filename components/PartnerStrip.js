// components/PartnerStrip.js - REPLACED WITH DISTRIBUTOR NETWORK
"use client";
import { motion } from "framer-motion";

export default function PartnerStrip() {
  // Change to your actual distributor locations or achievements
  const items = ["Pan-India Presence", "10,000+ Retailers", "500+ Distributors", "25+ States"];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        padding: "40px 8%",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        textAlign: "center"
      }}
    >
      <p style={{ 
        fontSize: "11px", 
        color: "#6b7280", 
        letterSpacing: "3px", 
        marginBottom: "25px",
        fontWeight: "500"
      }}>
        OUR REACH
      </p>
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        gap: "50px", 
        flexWrap: "wrap"
      }}>
        {items.map((item, idx) => (
          <motion.span 
            key={item} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: "14px", 
              color: "#fff",
              fontWeight: "500",
              letterSpacing: "0.5px"
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}