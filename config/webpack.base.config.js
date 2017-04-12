const path = require('path'), fs = require('fs'), webpack = require('webpack');

module.exports = function(env) {
  return {
    entry: {
      bundle: './src/index.js'
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
          loader: 'babel-loader?cacheDirectory'
        },
        {
          test: /\.(jpg|png|gif|webp)$/,
          loader: 'url-loader?limit=10000'
        }
      ]
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.json', '.scss']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
  };
};
