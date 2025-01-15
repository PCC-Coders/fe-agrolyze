/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/",
        search: "",
      },
      {
        protocol: "https",
        hostname: "plant.id",
        port: "",
        pathname: "/",
        search: "",
      },
    ],
  },
};

export default nextConfig;
