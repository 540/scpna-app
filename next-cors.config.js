module.exports = {
  async rewrites() {
    return [
      {
        source: '/src/:path*',
        destination: 'https://api.notion.com/:path*'
      }
    ]
  }
}
