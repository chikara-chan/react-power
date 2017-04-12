const webpack = require('webpack'),
  merge = require('webpack-merge'),
  baseConfig = require('./webpack.base.config');

module.exports = function(env) {
  const base = baseConfig(env);

  return merge(base, {
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]!sass-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    plugins: []
  });
};
