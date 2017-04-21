process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const chalk = require('chalk')
const opn = require('opn')
const webpackConfig = require('../config/webpack.dev.config')
const config = require('./loadConfig')

const compiler = webpack(webpackConfig)
const devServer = new WebpackDevServer(compiler, {
  publicPath: webpackConfig.output.publicPath,
  compress: true,
  hot: config.hot,
  stats: {
    colors: true,
    chunks: false
  }
})

devServer.listen(config.port, err => {
  if (err) {
    console.log(err)

    return
  }
  console.log(
    `\n==> 🌎  Open up ` +
      `${chalk.cyan(`http://${config.host}:${config.port}${webpackConfig.output.publicPath}`)}` +
      ` in your browser.\n`
  )
  if (config.open) {
    opn(
      `http://${config.host}:${config.port}${webpackConfig.output.publicPath}`
    )
  }
})
