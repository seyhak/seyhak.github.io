/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "app")],
  },
}

module.exports = nextConfig
