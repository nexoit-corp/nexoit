import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-server only (ignored by `next build` / Vercel): extra hosts allowed to
  // load dev resources, e.g. ALLOWED_DEV_ORIGINS=192.168.1.45,nexoit.example.com
  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS?.split(",").filter(Boolean),
};

export default nextConfig;
