const webpack = require('webpack'),
  autoprefixer = require('autoprefixer'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  merge = require('webpack-merge'),
  baseConfig = require('./webpack.base.config');

module.exports = function(env) {
  return merge(baseConfig(env), {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader?modules&camelCase&importLoaders=1&localIdentName=[hash:base64:8]!postcss-loader!sass-loader'
          })
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!postcss-loader'
          })
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        comments: false
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        options: {
          postcss: [
            autoprefixer({
              browsers: ['> 5%', 'ie > 8']
            })
          ]
        }
      }),
      new ExtractTextPlugin('[name].css')
    ]
  });
};
