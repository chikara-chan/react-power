process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const chalk = require('chalk');
const webpackConfig = require('../config/webpack.dev.config')();

const compiler = webpack(webpackConfig);
const devServer = new WebpackDevServer(compiler, {
	contentBase: './public',
  publicPath: webpackConfig.output.publicPath,
  watchContentBase: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  compress: true,
	hot: true,
  stats: {
    colors: true,
  }
});
const port = 3000;

devServer.listen(port, err => {
  if (err) {
    console.log(err);

    return;
  }
  console.log(
    `\n==> 🌎  Listening on port ${port}. ` +
    `Open up ${chalk.cyan(`http://localhost:${port}/`)} in your browser.\n`
  )
});
