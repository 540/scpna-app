/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const { cors } = require('./next-cors.config')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  cors
}

module.exports = nextConfig
