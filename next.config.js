/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint:{ignoreDuringBuilds:true},

  images:{
  domains: ['www.skydispatch.net'],
}

}

module.exports = nextConfig