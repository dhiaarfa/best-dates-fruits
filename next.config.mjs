/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// On GitHub Pages for this repo, the site lives under /best-dates-fruits
const basePath = isProd ? '/best-dates-fruits' : ''

const nextConfig = {
  // Enable static export for multiple deployment options
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // GitHub Pages project sites are served under /<repo>
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
}

export default nextConfig
