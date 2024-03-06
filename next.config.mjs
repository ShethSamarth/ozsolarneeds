/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.ozsolarneeds.com.au",
      },
    ],
  },
}

export default nextConfig
