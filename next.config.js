/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '.',
  compress: true,
}

module.exports = nextConfig