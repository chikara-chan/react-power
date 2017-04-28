const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const config = require('../lib/loadConfig')

module.exports = merge(base, {
  output: {
    path: path.resolve(config.output),
    filename: `[name]${config.hash ? '.[chunkhash:8]' : ''}.js`,
    chunkFilename: `chunk.[name]${config.hash ? '.[chunkhash:8]' : ''}.js`,
    publicPath: config.publicPath
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: config.cssModules,
                camelCase: true,
                importLoaders: 2,
                localIdentName: '[hash:base64:8]'
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: config.cssModules,
                camelCase: true,
                importLoaders: 2,
                localIdentName: '[hash:base64:8]'
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            }
          ]
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
            browsers: config.browserslist
          })
        ]
      }
    }),
    new ExtractTextPlugin({
      filename: `[name]${config.hash ? '.[contenthash:8]' : ''}.css`
    })
  ]
})
