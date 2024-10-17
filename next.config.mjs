/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 500],
  },
};

export default nextConfig;

// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 500],
//   },
//   webpack: (config) => {
//     if (process.env.ANALYZE === "true") {
//       config.plugins.push(
//         new BundleAnalyzerPlugin({
//           analyzerMode: "server",
//           analyzerPort: 3333,
//           openAnalyzer: true,
//         }),
//       );
//     }
//     return config;
//   },
// };

// export default nextConfig;
