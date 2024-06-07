/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  // swSrc: 'pwa-service-worker.js',
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

const nextConfig = withPWA({
  reactStrictMode: false, // 👈 DISABLING THIS TO AVOID DOUBLE RENDER
});

module.exports = nextConfig;
