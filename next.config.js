/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/ononiv.github.io',
  assetPrefix: '/ononiv.github.io',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig