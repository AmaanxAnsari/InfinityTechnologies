/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["localhost"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  basePath: 'https://github.com/AmaanxAnsari/InfinityTechnologies', 
};

module.exports = nextConfig;
