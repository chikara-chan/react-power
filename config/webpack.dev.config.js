const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const config = require('../lib/loadConfig')

function composeHotSuite(base) {
  Object.keys(base.entry).forEach(key => {
    base.entry[key] = [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${config.port}/`,
      'webpack/hot/only-dev-server',
    ].concat(base.entry[key])
  })

  base.plugins.push(new webpack.HotModuleReplacementPlugin())
}

if (config.hot) {
  composeHotSuite(base)
}

module.exports = merge(base, {
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          camelCase: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]__[hash:base64:8]'
        }
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          camelCase: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]__[hash:base64:8]'
        }
      }, {
        loader: 'less-loader'
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }]
  }
});
