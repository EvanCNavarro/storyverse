/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Only include necessary configuration for now
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
