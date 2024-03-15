/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.ozsolarneeds.com.au",
      },
      {
        protocol: "https",
        hostname: "ozsolarneeds.com.au",
      },
    ],
  },
}

export default nextConfig
