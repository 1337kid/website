/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable hot reloading in Docker
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  // Configure the dev server to work with Docker
  experimental: {
    // Enable hot reloading
    forceSwcTransforms: true,
  },
  // Ensure the app works with Docker networking
  async rewrites() {
    return [];
  },
};

export default nextConfig;
