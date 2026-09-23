/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/schedule", destination: "/our-schedule", permanent: true },
      { source: "/shows", destination: "/podcast-list", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/meet-your-host", destination: "/meet-your-hosts", permanent: true },
      { source: "/who-we-are", destination: "/who-we-are-2", permanent: true },
      { source: "/what-we-do", destination: "/what-we-do-2", permanent: true },
    ];
  },
};

module.exports = nextConfig;
