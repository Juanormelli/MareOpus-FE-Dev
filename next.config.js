const withNextPlugins = require('next-compose-plugins')
const withVideos = require('next-videos')
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */

//module.exports = nextTranslate();

module.exports = withNextPlugins([
    {
      images: {
        domains: ["lh3.googleusercontent.com"],
      },
    },
    withVideos,
    [
      withPWA,
      {
        : {
          disable: process.env.NODE_ENV !== "production",
          register: true,
          scope: "/",
          dest: "public",
          sw: "/service-worker.js",
        },
      },
    ]
  ], {
  reactStrictMode: true,
  reloadOnPrerender: false,
  i18n,
  images: {
    domains: ['images.ray-ban.com'],
  },
})