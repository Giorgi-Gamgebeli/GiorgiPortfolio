/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 500],
  },
};

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 500],
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: [
//         {
//           loader: "@svgr/webpack",
//           options: {
//             // You can specify options here if needed
//             // e.g., icon: true
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };


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
//           analyzerPort: 3334,
//           openAnalyzer: true,
//         }),
//       );
//     }
//     return config;
//   },
// };

// export default nextConfig;
