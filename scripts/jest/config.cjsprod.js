const srcConfig = require('./config.src')

module.exports = Object.assign({}, srcConfig, {
  collectCoverage: false,
  moduleNameMapper: {
    '^../src$': `<rootDir>/dist/react-nprogress.cjs.production.js`,
  },
  testMatch: ['<rootDir>/test/(use|with)?NProgress.spec.ts?(x)'],
})
