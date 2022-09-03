// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
// const isProd = process.env.NODE_ENV === 'production'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    // dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/]
    // disable: !isProd
  }
})
