import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  compress: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
