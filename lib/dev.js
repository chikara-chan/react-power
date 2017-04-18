process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const chalk = require('chalk');
const webpackConfig = require('../config/webpack.dev.config');
const config = require('./loadConfig');

const compiler = webpack(webpackConfig);
const devServer = new WebpackDevServer(compiler, {
  publicPath: webpackConfig.output.publicPath,
  watchContentBase: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  compress: true,
	hot: config.hot,
  stats: {
    colors: true
  }
});

devServer.listen(config.port, err => {
  if (err) {
    console.log(err);

    return;
  }
  console.log(
    `\n==> 🌎  Listening on port ${config.port}. ` +
    `Open up ${chalk.cyan(`http://localhost:${config.port}/`)} in your browser.\n`
  )
});
