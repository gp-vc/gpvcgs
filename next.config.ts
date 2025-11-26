import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
