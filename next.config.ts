import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
        protocol: "https"
      },
      {
        hostname: "placehold.co",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
