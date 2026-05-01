import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "mediwill.in",
          },
        ],
        destination: "https://www.mediwill.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;