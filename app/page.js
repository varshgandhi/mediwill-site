"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ProductSection from "@/components/ProductSection";
import CardiacSection from "@/components/CardiacSection"; // ✅ ADD THIS
import Marquee from "@/components/Marquee";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <TrustBadges />

      {/* ✅ REPLACED CARDIAC SECTION */}
      <CardiacSection />

      {/* KEEP OTHERS SAME */}
      <ProductSection 
        id="ortho" 
        title="Orthopedic Division" 
        subtitle="Restoring Movement." 
        tagline="Rebuilding Strength." 
        theme="ortho" 
        imageAlt="Orthopedic treatment" 
      />
      
      <ProductSection 
        id="infective" 
        title="Anti-Infective Care" 
        subtitle="Precision Therapy." 
        tagline="Complete Protection." 
        theme="infective" 
        imageAlt="Anti-infective shield" 
      />
      
      <ProductSection 
        id="gyneco" 
        title="Gynecology Division" 
        subtitle="Care Designed for Women." 
        tagline="Trusted for Life." 
        theme="gyneco" 
        imageAlt="Women's health" 
      />
      
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
          Let's Connect
        </h2>

        <p
          style={{
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: "500px",
            marginBottom: "40px",
          }}
        >
          Ready to transform healthcare together? Reach out to our team.
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