// components/PageLoader.js
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Handle route change start
    const handleStart = () => {
      console.log("Navigation started"); // Check console
      setLoading(true);
    };

    // Handle route change complete
    const handleComplete = () => {
      console.log("Navigation complete"); // Check console
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    // Subscribe to router events
    router.push = new Proxy(router.push, {
      apply: (target, thisArg, args) => {
        handleStart();
        return target.apply(thisArg, args);
      },
    });

    // Also handle link clicks
    const originalReplace = router.replace;
    router.replace = new Proxy(originalReplace, {
      apply: (target, thisArg, args) => {
        handleStart();
        return target.apply(thisArg, args);
      },
    });

    // Cleanup
    return () => {
      router.push = router.push;
      router.replace = originalReplace;
    };
  }, [router]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
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
            gap: "30px",
          }}
        >
          <motion.img
            src="/logo.png"
            alt="Mediwill"
            style={{ width: "80px", height: "auto" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: "30px",
              height: "30px",
              border: "2px solid rgba(120,80,255,0.2)",
              borderTop: "2px solid #7850ff",
              borderRadius: "50%",
            }}
          />
          
          <motion.p
            style={{
              color: "#9ca3af",
              fontSize: "12px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}