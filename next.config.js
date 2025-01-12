/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-2.0' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-2.0/' : '',
}

module.exports = nextConfig 