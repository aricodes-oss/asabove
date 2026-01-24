import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  output: 'standalone',
  cacheComponents: true,
  cacheLife: {
    weather: {
      stale: 3600, // 1h
      revalidate: 900, // 15m
      expire: 86400, // 1d
    },
    events: {
      stale: 900, // 15m
      revalidate: 300, // 5m
      expire: 86400, // 1d
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**',
      },
      { protocol: 'https', hostname: 'drive-thirdparty.googleusercontent.com', pathname: '/**' },
    ],
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    useCache: true,
  },
  sassOptions: {
    implementation: 'sass-embedded',
    additionalData: `@use "${path.join(process.cwd(), '_mantine').replace(/\\/g, '/')}" as mt;`,
  },
};

export default nextConfig;
