/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["picsum.photos", "fastly.picsum.photos", "asset.codefreaks.web.id"],
  },
};

module.exports = nextConfig;
