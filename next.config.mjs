/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackBuildWorker: true,
  },
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
