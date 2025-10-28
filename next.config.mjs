/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPOSITORY || ''
const repoName = repo.split('/')[1] || ''
const isProjectPages = repoName && !repoName.endsWith('.github.io')
const basePath = isProjectPages ? `/${repoName}` : ''

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
