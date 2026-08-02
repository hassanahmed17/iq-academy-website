import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  compress: true,
  images: {
    qualities: [75, 85, 90],
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

