// app/layout.js
"use client";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#000",
          scrollBehavior: "smooth",
        }}
      >
        <PageLoader />
        {children}
      </body>
    </html>
  );
}