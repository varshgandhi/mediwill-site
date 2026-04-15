import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CardiacSection from "@/components/CardiacSection";
import OrthoSection from "@/components/OrthoSection";
import AntiInfectiveSection from "@/components/AntiInfectiveSection";
import GynecologySection from "@/components/GynecologySection";

export default function Home() {
  return (
    <main>

      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="cardiac">
        <CardiacSection />
      </section>

      <section id="ortho">
        <OrthoSection />
      </section>

      <section id="infective">
        <AntiInfectiveSection />
      </section>

      <section id="gyneco">
        <GynecologySection />
      </section>

      <section id="contact">
        <div style={{
          height: "100vh",
          background: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          Contact Section
        </div>
      </section>

    </main>
  );
}