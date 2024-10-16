/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow Next.js to optimize images from specific domains
    // domains: ["example.com"], // Replace with your image host domain(s)
    // Optionally set a deviceSizes array for responsive images
    deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2048, 3840],
    // Optionally set a imageSizes array for specific image sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 500],
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
