/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/livesqlbench.github.io",
  assetPrefix: "/livesqlbench.github.io/",
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
