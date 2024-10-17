/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 500],
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      config.devtool = "source-map";
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
