"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

function Counter({ target }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseInt(target.replace("+", ""));
    const duration = 1200;
    const step = end / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [inView]);

  return <span ref={ref}>{count}{target.includes("+") && "+"}</span>;
}

export default function AboutPage() {
  return (
    <main style={{ background: "#000", color: "white" }}>

      {/* BACK */}
      <div style={{ padding: "30px 8% 0" }}>
        <Link href="/" style={{ color: "#9ca3af" }}>← Back</Link>
      </div>

      {/* HERO */}
      <section style={{ padding: "100px 8% 80px", position: "relative" }}>
        <div className="hero-glow" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="tag">MEDIWILL</span>

          <h1 className="title">Will. For Life.</h1>

          <p className="desc">
            Mediwill represents a commitment to precision healthcare.
            We build pharmaceutical solutions that balance science,
            quality, and patient outcomes — across critical therapeutic areas.
          </p>
        </motion.div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust">
        {[
          "GMP Manufacturing",
          "Evidence-Based Formulations",
          "Regulatory Compliance",
          "Patient-Centric Design"
        ].map((t) => (
          <div key={t}>{t}</div>
        ))}
      </section>

      {/* MISSION / VISION */}
      <section className="grid">
        {[
          {
            title: "Mission",
            text: "Deliver precision pharmaceutical solutions that improve clinical outcomes."
          },
          {
            title: "Vision",
            text: "Build a trusted healthcare brand driven by innovation and responsibility."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* LEADERSHIP / TRUST */}
      <section className="leadership">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Built on Expertise</h2>
          <p>
            Mediwill is guided by professionals with deep experience in
            pharmaceutical development, regulatory standards, and clinical excellence.
          </p>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="stats">
        {[
          { value: "100+", label: "Formulations" },
          { value: "4", label: "Therapeutic Areas" },
          { value: "GMP", label: "Quality Standard" }
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="stat-value">
              {s.value === "GMP" ? s.value : <Counter target={s.value} />}
            </div>
            <div className="stat-label">{s.label}</div>
          </motion.div>
        ))}
      </section>

      <style jsx>{`
        .hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(120,80,255,0.2), transparent);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(120px);
        }

        .tag {
          color: #7850ff;
          letter-spacing: 3px;
          font-size: 12px;
        }

        .title {
          font-size: 64px;
          margin: 20px 0;
        }

        .desc {
          max-width: 700px;
          color: #9ca3af;
          font-size: 18px;
        }

        .trust {
          display: flex;
          justify-content: space-between;
          padding: 40px 8%;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: #9ca3af;
          flex-wrap: wrap;
          gap: 20px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
          gap: 40px;
          padding: 80px 8%;
        }

        .card {
          padding: 40px;
          background: rgba(255,255,255,0.03);
          border-radius: 20px;
        }

        .leadership {
          padding: 100px 8%;
          text-align: center;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 80px;
          padding: 100px 8%;
          flex-wrap: wrap;
        }

        .stat-value {
          font-size: 56px;
          color: #7850ff;
        }

        .stat-label {
          color: #9ca3af;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .title {
            font-size: 40px;
          }
        }
      `}</style>
    </main>
  );
}