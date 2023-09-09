/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.tmdb.org', 'upload.wikimedia.org']
    },
    experimental: {
       serverActions: true,
  },
}

module.exports = nextConfig
