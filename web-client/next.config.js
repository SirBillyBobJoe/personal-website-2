// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Add the node-loader configuration here
      config.module.rules.push({
        test: /\.node$/,
        use: 'node-loader',
      });
  
      // Important: return the modified config
      return config;
    },
  };
  
  module.exports = nextConfig;
  