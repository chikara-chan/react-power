const path = require('path')
const fs = require('fs')
const webpack = require('webpack');
const babelConfig = require('./babel.config')

module.exports = function(env) {
  return {
    entry: {
      bundle: [
        'react-hot-loader/patch',
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        './src/index.js'
      ]
    },
    output: {
      path: path.resolve('dist'),
      filename: '[name].js',
      publicPath: '/'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: babelConfig
        },
        {
          test: /\.(jpg|png|gif|webp)$/,
          loader: 'url-loader?limit=10000'
        }
      ]
    },
    resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['.js', '.json', '.scss']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
  };
};
