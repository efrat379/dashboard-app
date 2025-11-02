import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators : false
};

if (process.env.NODE_ENV === 'development') {
    // Hanya tambahkan konfigurasi ini di mode pengembangan
    nextConfig.experimental = {
        // Menetapkan root ke direktori ini (dashboard-app)
        turbopack: {
            root: __dirname,
        },
    };
}

export default nextConfig;
