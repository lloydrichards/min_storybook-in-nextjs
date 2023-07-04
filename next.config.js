const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/storybook/',
        destination: '/storybook/index.html',
      },
    ]
  }
}

module.exports = withContentlayer(nextConfig)
