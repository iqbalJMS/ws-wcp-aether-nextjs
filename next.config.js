const PUBLIC_SUBDIR = '/web/guest';
const SOURCE_PATH = '/web/guest';

module.exports = {
  basePath: SOURCE_PATH,
  assetPrefix: PUBLIC_SUBDIR,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: SOURCE_PATH,
        permanent: true,
        basePath: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/web/guest/:path*',
        destination: '/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin-bri-corpsite.dev-kjt.id',
      },
      {
        protocol: 'https',
        hostname: 'admin-bri-corpsite.stg.service-kjt.id',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'craftypixels.com',
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
      },
    ],
  },
};
