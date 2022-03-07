const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: !isProd,
  pwa: {
    dest: 'public',
    disable: !isProd
  }
}
module.exports = withPWA(nextConfig)
