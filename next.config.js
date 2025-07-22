/** @type {import('next').NextConfig} */

const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

const nextConfig = {
    images: {
        domains:["googleusercontent.com", "lh3.googleusercontent.com", "res.cloudinary.com"],
    },
    webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new CaseSensitivePathsPlugin());
    }
    return config;
  },
}

module.exports = nextConfig
