const webpack = require('webpack'),
  autoprefixer = require('autoprefixer'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  merge = require('webpack-merge'),
  baseConfig = require('./webpack.base.config');

module.exports = function(env) {
  return merge(baseConfig(env), {
    module: {
      rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              importLoaders: 1,
              localIdentName: '[hash:base64:8]'
            }
          }, {
            loader: 'postcss-loader'
          }, {
            loader: 'sass-loader'
          }]
        })
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              importLoaders: 1,
              localIdentName: '[hash:base64:8]'
            }
          }, {
            loader: 'postcss-loader'
          }, {
            loader: 'less-loader'
          }]
        })
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader'
          }]
        })
      }]
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
              browsers: ['> 5%', 'ie > 7']
            })
          ]
        }
      }),
      new ExtractTextPlugin('[name].css')
    ]
  });
};
