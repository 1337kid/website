/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable hot reloading in Docker
  turbopack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  // Ensure the app works with Docker networking
  async rewrites() {
    return [];
  },
  // Configure allowed image domains for Next.js Image component
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zyolfylglkqvlkttrxas.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
