/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "https://example.com/myaccount/",
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));

    return config;
  },
};
