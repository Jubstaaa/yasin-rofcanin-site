import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every page prerenders from `lib/content.ts`, so the site ships as plain
  // files served by Caddy rather than a Node process. Nothing is dynamic any
  // more: the CMS, the database and the contact form's server action all left
  // with Payload.
  output: "export",
  experimental: {
    reactCompiler: false,
  },
  images: {
    // A static export has no /_next/image optimizer. The sources were already
    // webp in the CMS, so serving them untouched costs nothing.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yasinrofcanin.fra1.cdn.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
