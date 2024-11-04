/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'asset.codefreaks.web.id',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
