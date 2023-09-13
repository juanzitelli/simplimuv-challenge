/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["cdn.visordown.com", "m.media-amazon.com"],
  },
};

module.exports = nextConfig;
