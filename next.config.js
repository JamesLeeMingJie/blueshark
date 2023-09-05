/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const withVideos = require('next-videos')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};

module.exports = nextConfig;

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = withVideos();