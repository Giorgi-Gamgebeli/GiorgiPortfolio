// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 500],
//   },
// };

// export default nextConfig;

// Import the bundle analyzer
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 500],
  },
  webpack: (config) => {
    if (process.env.ANALYZE === "true") {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
          openAnalyzer: true,
        }),
      );
    }
    return config;
  },
};

export default nextConfig;

// import withBundleAnalyzer from "@next/bundle-analyzer";

// const nextConfig = {};

// /** @type {import('next').NextConfig} */
// const config = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// })(nextConfig);

// export default config;
