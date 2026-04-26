// app/contact/page.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Professional SVG Icons
const LocationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#7850ff" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="9" r="2.5" stroke="#7850ff" strokeWidth="1.5" fill="none"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#7850ff" strokeWidth="1.5" fill="none"/>
    <path d="M22 7L12 13L2 7" stroke="#7850ff" strokeWidth="1.5" fill="none"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="#7850ff" strokeWidth="1.5" fill="none"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#7850ff" strokeWidth="1.5" fill="none"/>
    <path d="M12 7v5l3 3" stroke="#7850ff" strokeWidth="1.5" fill="none"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="#7850ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main style={{ background: "#000", minHeight: "100vh", position: "relative" }}>
      {/* Animated Background */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(125deg, #000000, #0a0a2a, #1a0a2a, #0a0a2a, #000000)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
        zIndex: 0,
      }} />
      
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Back Button */}
        <div style={{ padding: "30px 8% 0" }}>
          <Link href="/" style={{ color: "#9ca3af", textDecoration: "none", fontSize: "14px", transition: "0.3s" }}>
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
            <h1 style={{ fontSize: "64px", marginTop: "20px", marginBottom: "20px", fontWeight: "600", lineHeight: "1.1" }}>
              Let's Connect
            </h1>
            <p style={{ color: "#9ca3af", fontSize: "18px", maxWidth: "600px", lineHeight: "1.6" }}>
              Have questions about our products, partnerships, or career opportunities? 
              We'd love to hear from you.
            </p>
          </motion.div>
        </section>

        {/* Contact Form + Info */}
        <section style={{ padding: "40px 8% 100px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "60px" }}>
          
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ background: "rgba(255,255,255,0.02)", borderRadius: "28px", padding: "40px", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Send a Message</h2>
            <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "32px" }}>We'll respond within 24 hours</p>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "16px 18px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    color: "#fff",
                    fontSize: "16px",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#7850ff"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
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
                    padding: "16px 18px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    color: "#fff",
                    fontSize: "16px",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#7850ff"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
              
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "16px 18px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    color: "#fff",
                    fontSize: "16px",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#7850ff"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
              
              <div style={{ marginBottom: "28px" }}>
                <textarea
                  placeholder="Your Message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "16px 18px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    color: "#fff",
                    fontSize: "16px",
                    fontFamily: "inherit",
                    outline: "none",
                    resize: "vertical",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#7850ff"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "999px",
                  border: "1px solid rgba(120,80,255,0.5)",
                  background: isSubmitting ? "rgba(120,80,255,0.08)" : "rgba(120,80,255,0.15)",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.currentTarget.style.background = "rgba(120,80,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.currentTarget.style.background = "rgba(120,80,255,0.15)";
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ color: "#22c55e", marginTop: "20px", textAlign: "center", fontSize: "14px" }}
                >
                  Message sent — we'll be in touch soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info - Professional */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: "28px", marginBottom: "32px" }}>Reach Us</h2>
            
            {/* Office */}
            <div style={{ marginBottom: "40px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ width: "28px", flexShrink: 0 }}><LocationIcon /></div>
              <div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px", color: "#fff", fontWeight: "500" }}>Corporate Office</h3>
                <p style={{ color: "#9ca3af", lineHeight: "1.6", fontSize: "14px" }}>
                  Police Rd, Manivartapete,<br />
                  Sultanpete, Bengaluru,<br />
                  Karnataka 560053<br />
                  India
                </p>
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: "40px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ width: "28px", flexShrink: 0 }}><EmailIcon /></div>
              <div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px", color: "#fff", fontWeight: "500" }}>Email</h3>
                <p style={{ color: "#9ca3af", fontSize: "14px" }}>
                  <a href="mailto:info@mediwill.in" style={{ color: "#7850ff", textDecoration: "none" }}>info@mediwill.in</a>
                </p>
                <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>General inquiries & partnerships</p>
              </div>
            </div>

            {/* Phone */}
            <div style={{ marginBottom: "40px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ width: "28px", flexShrink: 0 }}><PhoneIcon /></div>
              <div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px", color: "#fff", fontWeight: "500" }}>Phone</h3>
                <p style={{ color: "#9ca3af", fontSize: "14px" }}>
                  080 4175 1655
                </p>
                <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>Monday – Friday, 9AM – 6PM</p>
              </div>
            </div>

            {/* Hours */}
            <div style={{ marginBottom: "40px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ width: "28px", flexShrink: 0 }}><ClockIcon /></div>
              <div>
                <h3 style={{ fontSize: "16px", marginBottom: "8px", color: "#fff", fontWeight: "500" }}>Office Hours</h3>
                <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.6" }}>
                  Monday – Friday: 9:00 AM – 6:00 PM<br />
                  Saturday: 10:00 AM – 2:00 PM
                </p>
              </div>
            </div>

            {/* Google Maps Link */}
            <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <a 
                href="https://www.google.com/maps?q=Police+Rd,+Manivartapete,+Sultanpete,+Bengaluru,+Karnataka+560053"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: "#7850ff", 
                  textDecoration: "none", 
                  fontSize: "14px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                Get Directions <ArrowIcon />
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 50%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </main>
  );
}