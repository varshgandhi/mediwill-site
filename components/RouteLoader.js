// components/RouteLoader.js
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader when route starts changing
    setLoading(true);
    
    // Hide loader after route changes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#000",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "40px",
              height: "40px",
              border: "2px solid rgba(120,80,255,0.2)",
              borderTop: "2px solid #7850ff",
              borderRadius: "50%",
            }}
          />
          <p style={{ color: "#9ca3af", fontSize: "12px", letterSpacing: "2px" }}>
            Loading...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}