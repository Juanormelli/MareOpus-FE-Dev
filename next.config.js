const withNextPlugins = require('next-compose-plugins')
const withVideos = require('next-videos')
const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */

//module.exports = nextTranslate();

module.exports = withNextPlugins([withVideos], {
  reactStrictMode: true,
  reloadOnPrerender: false,
  i18n,
  images: {
    domains: ['images.ray-ban.com'],
  },
})