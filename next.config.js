/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|mov)$/i,
      type: 'asset/resource',
    })
    return config
  },
}

module.exports = nextConfig 