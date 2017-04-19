const path = require('path')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

let config = {
  input: './src',
  output: './dist',
  publicPath: '/',
  multi: false,
  ignore: /shared/,
  vendor: [],
  externals: {},
  hot: true,
  hash: true,
  babelrc: {},
  autoprefixer: ['last 2 versions', '> 5%', 'ie > 8'],
  host: 'localhost',
  port: 3000,
  open: false
}

try {
  const userConfig = require(path.resolve('./react-power.config.js'))

  config = Object.assign({}, config, userConfig)
} catch (e) {}

module.exports = config
