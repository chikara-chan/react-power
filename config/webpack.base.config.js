const path = require('path')
const fs = require('fs')
const webpack = require('webpack');
const babelConfig = require('./babel.config')

module.exports = function(env) {
  return {
    entry: {
      bundle: [
        './src/index.js'
      ]
    },
    output: {
      path: path.resolve('dist'),
      filename: '[name].js',
      publicPath: '/'
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: babelConfig
        }]
      }, {
        test: /\.(jpg|png|gif|webp)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }]
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.json', '.scss', '.less']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
  };
};
