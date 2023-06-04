/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  async rewrites() {
    return [
      {
        source: "/api/",
        destination: "http://localhost:3000/api/",
      },
    ];
  },
};

module.exports = nextConfig;
