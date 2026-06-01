/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export → outputs a plain `out/` folder of HTML/CSS/JS.
  // Perfect for Cloudflare Pages / GitHub Pages / any static host.
  // Comment this out if you later add server features (API routes, SSR).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Images are local SVG placeholders by default (see /public/images and
  // components/Placeholder.tsx). When you switch to real remote photos,
  // add their domains here, e.g.:
  // images: { remotePatterns: [{ protocol: 'https', hostname: 'images.example.com' }] },
};

export default nextConfig;
