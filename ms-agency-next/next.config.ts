import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.premiercap.fr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.cd-sport.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "b730616.smushcdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
