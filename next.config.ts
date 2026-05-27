import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // allow specific remote hosts for next/image
    domains: ['images.pexels.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
