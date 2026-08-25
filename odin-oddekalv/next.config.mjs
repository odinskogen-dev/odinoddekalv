/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: the public site ships as plain HTML/CSS/JS on Cloudflare Pages.
  output: "export",
  // The site deliberately uses original archive imagery and Fourthwall CDN assets directly.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
