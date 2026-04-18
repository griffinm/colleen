import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // PLACEHOLDER — remove once real photography is hosted on our own CDN
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
