/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'))
    config.module.rules.push({ test: /\.svg$/, use: ['@svgrwebpack'] })

    return config
  },
}
