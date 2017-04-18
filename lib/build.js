process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod.config');

const argv = process._argv

if (argv.watch) {
  webpackConfig.watch = true
}
webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.log(err);

    return;
  }
  console.log(
    stats.toString({
      chunks: false,
      colors: true
    })
  );
});
