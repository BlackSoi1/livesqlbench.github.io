/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only use basePath and assetPrefix in production
  basePath: process.env.NODE_ENV === 'production' ? "/livesqlbench.github.io" : "",
  assetPrefix: process.env.NODE_ENV === 'production' ? "/livesqlbench.github.io/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: require.resolve("fs"),
      path: require.resolve("path"),
    };
    return config;
  },
};

module.exports = nextConfig;
