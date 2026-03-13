/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/esemenyek', destination: '/udalosti', permanent: true },
      { source: '/esemenyek/:id', destination: '/udalosti/:id', permanent: true },
      { source: '/partnerek', destination: '/partneri', permanent: true },
      { source: '/rolunk', destination: '/o-nas', permanent: true },
      { source: '/kapcsolat', destination: '/kontakt', permanent: true },
      { source: '/adatvedelem', destination: '/ochrana-udaju', permanent: true },
      { source: '/sutik', destination: '/cookies', permanent: true },
    ]
  },
}

export default nextConfig
