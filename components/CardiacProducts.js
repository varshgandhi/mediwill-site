"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const cardiacData = [
  {
    title: "Hypertension",
    color: "#ff3c3c",
    items: ["TELWILL 20/40", "TELWILL H40/H80", "TELWILL AM/AMH"],
  },
  {
    title: "Antiplatelet",
    color: "#ff8c00",
    items: ["CLOWILL 75", "ROSUWILL AC"],
  },
  {
    title: "Lipid",
    color: "#facc15",
    items: ["ATOWILL 10/20/40", "ROSUWILL 10/20"],
  },
  {
    title: "Thyroid / Nephro",
    color: "#d946ef",
    items: ["THYROWILL 25/50", "RENOWILL"],
  },
];

const diabetesData = [
  {
    title: "Glycemic Control",
    color: "#ff7a00",
    items: ["GLIWILL 1/2", "DAPAWILL 5/10", "VIDAWILL 50"],
  },
  {
    title: "Combination Therapy",
    color: "#ff9a00",
    items: ["GLIWILL M/PM", "VIDAWILL M 50/500"],
  },
  {
    title: "Advanced Therapy",
    color: "#ffb300",
    items: ["GLIWILL M 12/3/22", "DAPAWILL M500"],
  },
];

function Section({ title, data }) {
  return (
    <div style={{ marginBottom: "80px" }}>
      <h2
        style={{
          fontSize: "48px",
          marginBottom: "40px",
        }}
      >
        {title}
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",   // 🔥 FIXED GRID
          gap: "30px",
        }}
      >
        {data.map((card, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 40px ${card.color}55`,
            }}
            style={{
              padding: "28px",
              borderRadius: "20px",
              border: `1px solid ${card.color}`,
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(20px)",
              transition: "0.3s",
              cursor: "pointer",
              minHeight: "200px",
            }}
          >
            <h3 style={{ color: card.color, marginBottom: "15px" }}>
              {card.title}
            </h3>

            {card.items.map((item, j) => (
              <motion.p
                key={j}
                whileHover={{
                  x: 6,
                  color: "#fff",
                }}
                style={{
                  color: "#9ca3af",
                  marginBottom: "6px",
                }}
              >
                {item}
              </motion.p>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function CardiacProducts() {
  return (
    <div
      style={{
        padding: "80px 8%",
        maxWidth: "1300px",   // 🔥 PREVENT FULL STRETCH (fixes layout shift)
        margin: "0 auto",
      }}
    >
      <Section title="Cardiac Range" data={cardiacData} />
      <Section title="Diabetes Range" data={diabetesData} />
    </div>
  );
}