/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'awesomesam.dev',
      }
    ]
  }
};

export default nextConfig;
