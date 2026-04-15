"use client";
import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "cardiac", label: "Cardiac", color: "#ff3b3b" },
  { id: "ortho", label: "Orthopedic", color: "#3baaff" },
  { id: "infective", label: "Anti-Infective", color: "#00ffaa" },
  { id: "gyneco", label: "Gynecology", color: "#ff4fd8" },
  { id: "contact", label: "Contact", color: "#ffffff" },
];

export default function Navbar() {
  const [active, setActive] = useState("cardiac");
  const [pillStyle, setPillStyle] = useState({});
  const containerRef = useRef(null);

  // 🔥 Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      let current = "cardiac";

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = sec.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Move glow pill
  useEffect(() => {
    const activeEl = document.querySelector(".nav-item.active");
    const container = containerRef.current;

    if (activeEl && container) {
      const rect = activeEl.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();

      setPillStyle({
        width: rect.width + "px",
        height: rect.height + "px",
        transform: `translateX(${rect.left - parentRect.left}px)`,
      });

      // change glow color dynamically
      const color = sections.find((s) => s.id === active)?.color;
      document.documentElement.style.setProperty("--nav-glow", color);
    }
  }, [active]);

  return (
    <div className="nav-root">
      <div className="nav-container" ref={containerRef}>
        
        {/* LOGO */}
        <div className="nav-logo">
          <img src="/logo.png" alt="logo" />
        </div>

        {/* LINKS */}
        <div className="nav-links">
          <div className="nav-pill" style={pillStyle}></div>

          {sections.map((sec) => (
            <button
              key={sec.id}
              className={`nav-item ${active === sec.id ? "active" : ""}`}
              onClick={() =>
                document
                  .getElementById(sec.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}