const path = require('path')
const webpack = require('webpack');
const babelConfig = require('./babel.config')
const config = require('../lib/loadConfig')

module.exports = function(env) {
  return {
    entry: {
      bundle: [
        config.entry
      ]
    },
    output: {
      path: path.resolve(config.output),
      filename: '[name].js',
      publicPath: config.publicPath
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
      extensions: ['.js', '.json', '.scss', '.less', '.jpg', '.png', '.gif', '.webp']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
  };
};
