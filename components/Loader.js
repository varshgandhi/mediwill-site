// components/Loader.js
"use client";
import { useState, useEffect } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loader mounted"); // Check if component loads
    const timer = setTimeout(() => {
      console.log("Timer finished, hiding loader"); // Check if timer works
      setLoading(false);
    }, 3000); // 3 seconds - easier to see

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    console.log("Loader hidden");
    return null;
  }

  console.log("Loader showing");
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "red", // BRIGHT RED so you can't miss it
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white", fontSize: "48px" }}>LOADING...</h1>
      <p style={{ color: "white" }}>Please wait 3 seconds</p>
    </div>
  );
}