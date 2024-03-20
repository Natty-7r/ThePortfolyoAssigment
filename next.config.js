const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    // Add your custom configuration here
    config.resolve.alias["@pages"] = path.join(__dirname, "src", "pages");

    return config;
  },
};

module.exports = nextConfig;
