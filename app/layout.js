import "./globals.css";

export const metadata = {
  title: "Mediwill",
  description: "Precision Pharmaceutical Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#000",
          scrollBehavior: "smooth", // 🔥 basic smooth
        }}
      >
        {children}
      </body>
    </html>
  );
}