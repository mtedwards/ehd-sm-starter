/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['images.prismic.io', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
