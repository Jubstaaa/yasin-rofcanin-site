import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'yasinrofcanin.fra1.cdn.digitaloceanspaces.com',
                protocol: 'https',
            },
        ],
        unoptimized: true,
    },
    output: 'export',
}

export default nextConfig
