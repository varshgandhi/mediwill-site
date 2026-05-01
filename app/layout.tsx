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
  title: "Mediwill Life Sciences | Pharmaceutical Company in India",
  description:
    "Mediwill Life Sciences is an Indian pharmaceutical company specializing in cardiac, diabetes, orthopedic, and anti-infective medicines.",

  keywords: [
    "Mediwill Life Sciences",
    "Pharma company India",
    "Cardiac medicines",
    "Diabetes medicines",
    "Orthopedic pharma",
    "Anti-infective drugs",
  ],

  authors: [{ name: "Mediwill Life Sciences" }],

  metadataBase: new URL("https://www.mediwill.in"),

  alternates: {
    canonical: "https://www.mediwill.in",
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Mediwill Life Sciences",
    description:
      "Precision healthcare across cardiac, diabetes, and orthopedic care.",
    url: "https://www.mediwill.in",
    siteName: "Mediwill Life Sciences",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mediwill Life Sciences",
    description:
      "Precision healthcare solutions across cardiac, diabetes, and orthopedic care.",
    images: ["/og-image.png"],
  },
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
      <head>
        {/* Structured Data (VERY IMPORTANT for Google branding) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mediwill Life Sciences",
              url: "https://www.mediwill.in",
              logo: "https://www.mediwill.in/logo.png",
              sameAs: [
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
              ],
            }),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}