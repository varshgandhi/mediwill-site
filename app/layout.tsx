import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mediwill Life Sciences | Pharmaceutical Company in India | Cardiac, Diabetes & Anti-Infective Medicines",
  description:
  "Mediwill Life Sciences is an Indian pharmaceutical company providing high-quality cardiac, diabetes, orthopedic, and anti-infective medicines. Precision healthcare with innovation and trust.",  
  keywords: [
    "Mediwill",
    "Pharma company India",
    "Cardiac medicines",
    "Diabetes medicines",
    "Orthopedic pharma",
    "Anti-infective drugs",
  ],

  authors: [{ name: "Mediwill Life Sciences" }],

  openGraph: {
    title: "Mediwill Life Sciences",
    description:
      "Precision healthcare solutions across cardiac, diabetes and more.",
    url: "https://www.mediwill.in",
    siteName: "Mediwill Life Sciences",
    type: "website",
  },

  metadataBase: new URL("https://mediwill.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}