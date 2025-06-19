/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/w320/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/commons/thumb/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
