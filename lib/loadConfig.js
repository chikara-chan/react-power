const path = require('path')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
let config = {
  entry: './src',
  output: './dist',
  public: './public',
  publicPath: '/',
  port: 3000
}

try {
  const userConfig = require(path.resolve('./react-power.config.js'))

  config = Object.assign({}, config, userConfig)
} catch (e) {
}

module.exports = config
