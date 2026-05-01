"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ProductSection from "@/components/ProductSection";
import CardiacSection from "@/components/CardiacSection";
import Marquee from "@/components/Marquee";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* 🔥 SEO + BRAND BLOCK (VISIBLE + PREMIUM) */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 8%",
          background: "#000",
        }}
      >
        <h1
          style={{
            fontSize: "44px",
            fontWeight: 600,
            letterSpacing: "-0.5px",
          }}
        >
          Mediwill Life Sciences
        </h1>

        <p
          style={{
            color: "#9ca3af",
            maxWidth: "720px",
            margin: "20px auto",
            fontSize: "16px",
            lineHeight: "1.7",
          }}
        >
          Mediwill Life Sciences is a pharmaceutical company in India delivering
          precision healthcare across cardiac, diabetes, orthopedic,
          gynecology, and anti-infective care. Built on trust, innovation,
          and clinical excellence.
        </p>
      </section>

      <Marquee />
      <TrustBadges />

      {/* CARDIAC */}
      <CardiacSection />

      {/* ORTHO */}
      <ProductSection
        id="ortho"
        title="Orthopedic Medicines & Treatment"
        subtitle="Restoring Movement."
        tagline="Rebuilding Strength."
        theme="ortho"
        imageAlt="Orthopedic treatment medicines"
      />

      {/* INFECTIVE */}
      <ProductSection
        id="infective"
        title="Anti-Infective Medicines"
        subtitle="Precision Therapy."
        tagline="Complete Protection."
        theme="infective"
        imageAlt="Anti-infective pharmaceutical care"
      />

      {/* GYNECO */}
      <ProductSection
        id="gyneco"
        title="Gynecology Medicines & Care"
        subtitle="Care Designed for Women."
        tagline="Trusted for Life."
        theme="gyneco"
        imageAlt="Women's health pharmaceutical solutions"
      />

      {/* 🔥 AUTHORITY BLOCK (SEO BOOST) */}
      <section
        style={{
          padding: "80px 8%",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Advancing Pharmaceutical Excellence
        </h2>

        <p
          style={{
            color: "#9ca3af",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          At Mediwill Life Sciences, we focus on developing and delivering
          high-quality pharmaceutical formulations that meet global standards.
          Our divisions across cardiac, diabetes, orthopedic, gynecology, and
          anti-infective therapies are designed to improve patient outcomes and
          support healthcare professionals with reliable solutions.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          minHeight: "60vh",
          background: "#000",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "80px 8%",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Let’s Connect
        </h2>

        <p
          style={{
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: "500px",
            marginBottom: "40px",
          }}
        >
          Partner with Mediwill Life Sciences to deliver better healthcare
          outcomes together.
        </p>

        <Link href="/contact">
          <button
            className="btn btn-primary"
            style={{ padding: "14px 40px", cursor: "pointer" }}
          >
            Contact Us →
          </button>
        </Link>
      </section>
    </main>
  );
}