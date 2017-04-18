const path = require('path')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

let config = {
  input: './src',
  output: './dist',
  multi: false,
  ignore: /shared/,
  port: 3000,
  hot: true,
  autoprefixer: ['last 2 versions', '> 5%', 'ie > 8'],
  babelrc: {}
}

try {
  const userConfig = require(path.resolve('./react-power.config.js'))

  config = Object.assign({}, config, userConfig)
} catch (e) {
}

module.exports = config
