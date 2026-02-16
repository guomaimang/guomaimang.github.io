/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    path: "/myself/_next/image",
  },
  trailingSlash: false,
  basePath: '/myself',
  // 确保生成指定文件名的HTML
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/cn': { page: '/cn' },
    };
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
