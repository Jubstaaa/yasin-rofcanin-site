import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fppnyxariyb6rpz5.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default withPayload(nextConfig);
