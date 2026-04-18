// app/contact/page.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send to your API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main style={{ background: "#000", minHeight: "100vh" }}>
      {/* Back to Home */}
      <div style={{ padding: "30px 8% 0" }}>
        <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>
          ← Back to Home
        </Link>
      </div>

      {/* Header */}
      <section style={{ padding: "60px 8% 40px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span style={{ color: "#7850ff", fontSize: "14px", letterSpacing: "3px" }}>GET IN TOUCH</span>
          <h1 style={{ fontSize: "56px", marginTop: "20px", marginBottom: "20px" }}>
            Let's Connect
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "18px", maxWidth: "600px" }}>
            Have questions about our products, partnerships, or career opportunities? 
            We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Form + Info */}
      <section style={{ padding: "40px 8% 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "60px" }}>
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: "24px", marginBottom: "30px" }}>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "16px"
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: "100%",
                  padding: "16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "16px"
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <textarea
                placeholder="Your Message"
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: "100%",
                  padding: "16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "16px",
                  fontFamily: "inherit"
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", padding: "16px" }}
            >
              Send Message →
            </button>
            {submitted && (
              <p style={{ color: "#22c55e", marginTop: "15px", textAlign: "center" }}>
                ✓ Message sent! We'll get back to you soon.
              </p>
            )}
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: "24px", marginBottom: "30px" }}>Reach us directly</h2>
          
          <div style={{ marginBottom: "30px" }}>
            <div style={{ fontSize: "20px", marginBottom: "10px" }}>📍</div>
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Corporate Office</h3>
            <p style={{ color: "#9ca3af", lineHeight: "1.6" }}>
              [Your Address]<br />
              [City, State, PIN Code]<br />
              India
            </p>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <div style={{ fontSize: "20px", marginBottom: "10px" }}>📧</div>
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Email Us</h3>
            <p style={{ color: "#9ca3af" }}>
              General: <a href="mailto:info@mediwill.com" style={{ color: "#7850ff", textDecoration: "none" }}>info@mediwill.com</a><br />
              Partnerships: <a href="mailto:partners@mediwill.com" style={{ color: "#7850ff", textDecoration: "none" }}>partners@mediwill.com</a>
            </p>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <div style={{ fontSize: "20px", marginBottom: "10px" }}>📞</div>
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Call Us</h3>
            <p style={{ color: "#9ca3af" }}>
              +91 [Your Phone Number]
            </p>
          </div>

          <div>
            <div style={{ fontSize: "20px", marginBottom: "10px" }}>⏰</div>
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Business Hours</h3>
            <p style={{ color: "#9ca3af" }}>
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}