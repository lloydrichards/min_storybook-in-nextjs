/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
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

module.exports = nextConfig
