"use client";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("");
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = ["cardiac", "ortho", "infective", "gyneco"];
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 200;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🧠 PROXIMITY DETECTION
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!navRef.current) return;

      const rect = navRef.current.getBoundingClientRect();

      const buffer = 80; // distance sensitivity

      const isNear =
        e.clientX > rect.left - buffer &&
        e.clientX < rect.right + buffer &&
        e.clientY > rect.top - buffer &&
        e.clientY < rect.bottom + buffer;

      setExpanded(isNear);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getGlow = () => {
    switch (active) {
      case "cardiac":
        return "rgba(255, 60, 60, 0.25)";
      case "ortho":
        return "rgba(80, 150, 255, 0.25)";
      case "infective":
        return "rgba(0, 255, 150, 0.25)";
      case "gyneco":
        return "rgba(255, 100, 200, 0.25)";
      default:
        return "rgba(255,255,255,0.06)";
    }
  };

  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`} ref={navRef}>
      <div
        className={`nav-inner ${expanded ? "expanded" : ""}`}
        style={{ boxShadow: `0 0 40px ${getGlow()}` }}
      >
        {/* LOGO */}
        <img src="/logo.png" className="logo" />

        {/* LINKS */}
        {(scrolled || expanded) && (
          <div className="links">
            {!expanded ? (
              <>
                <a href="#about">About</a>
                <a href="#range">Our Range</a>
                <a href="#contact">Contact</a>
              </>
            ) : (
              <>
                <a href="#cardiac">Cardiac</a>
                <a href="#ortho">Orthopedic</a>
                <a href="#infective">Anti-Infective</a>
                <a href="#gyneco">Gynecology</a>
                <a href="#contact">Contact</a>
              </>
            )}
          </div>
        )}
      </div>

      {/* ACTIVE INDICATOR */}
      {scrolled && active && (
        <div className="indicator" style={{ background: getGlow() }}>
          {active.toUpperCase()}
        </div>
      )}

      <style jsx>{`
        .nav {
          position: fixed;
          top: 20px;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 1000;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.35s ease;
        }

        .nav-inner.expanded {
          padding: 14px 28px;
          gap: 26px;
        }

        .logo {
          height: 34px;
          filter: drop-shadow(0 0 12px rgba(255, 100, 100, 0.4));
        }

        .links {
          display: flex;
          gap: 16px;
          transition: all 0.3s ease;
        }

        .links a {
          color: #cbd5f5;
          font-size: 14px;
          text-decoration: none;
          padding: 6px 10px;
          border-radius: 999px;
          transition: 0.25s;
        }

        .links a:hover {
          color: white;
          background: rgba(255, 255, 255, 0.08);
        }

        .indicator {
          position: absolute;
          bottom: -18px;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 11px;
          color: white;
          backdrop-filter: blur(8px);
          letter-spacing: 1px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .links {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}