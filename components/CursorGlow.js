// components/CursorGlow.js - Add to layout
"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  
  return (
    <div style={{
      position: "fixed",
      width: "400px",
      height: "400px",
      background: "radial-gradient(circle, rgba(120,80,255,0.08), transparent)",
      borderRadius: "50%",
      pointerEvents: "none",
      transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
      zIndex: 9999,
      transition: "transform 0.05s ease-out"
    }} />
  );
}