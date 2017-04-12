const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.dev.config')();

module.exports = function(argv) {
  const compiler = webpack(webpackConfig);
  const devServer = new WebpackDevServer(compiler);

  const port = 8080;
  devServer.listen(port, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Starting the development server on port ${port}...`);
  });
};
