import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Allow build to succeed even with ESLint errors
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Allow build to succeed even with TypeScript errors
    // Note: This is only for build - your IDE will still show type errors
    ignoreBuildErrors: false,
  },
  images:{
    remotePatterns:[
      {protocol:'https',
        hostname:'images.pexels.com'
      }
    ]
  }
};

export default nextConfig;
