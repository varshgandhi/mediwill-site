// app/layout.js
"use client";
import SimpleLoader from "@/components/SimpleLoader";

export default function RootLayout({ children }) {
  // FORCE LOADER TO ALWAYS SHOW
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <SimpleLoader />
      </body>
    </html>
  );
}