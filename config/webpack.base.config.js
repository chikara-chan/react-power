const path = require('path')
const fs = require('fs')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelConfig = require('./babel.config')
const config = require('../lib/loadConfig')

function injectEntry() {
  let entry = {}

  if (config.multi) {
    const filenames = fs.readdirSync(config.input)

    filenames.forEach(filename => {
      const stats = fs.statSync(path.resolve(config.input, filename))

      if (stats.isDirectory() && !config.ignore.test(filename)) {
        entry[`${filename}/bundle`] = path.resolve(config.input, filename)
      }
    })
  } else {
    entry.bundle = config.input
  }

  if (config.vendor.length) {
    entry.vendor = config.vendor
  }

  return entry
}

function injectPlugins() {
  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]

  if (config.multi) {
    const filenames = fs.readdirSync(config.input)

    filenames.forEach(filename => {
      const stats = fs.statSync(path.resolve(config.input, filename))
      const templatePath = path.resolve(config.input, filename, 'template.html')

      try {
        if (stats.isDirectory() && fs.statSync(templatePath)) {
          plugins.push(
            new HtmlWebpackPlugin({
              filename: `${filename}.html`,
              template: path.resolve(config.input, filename, 'template.html'),
              chunks: [`${filename}/bundle`],
              minify: {
                collapseWhitespace: true
              }
            })
          )
        }
      } catch (e) {}
    })

  } else {
    const templatePath = path.resolve(config.input, 'template.html')

    try {
      fs.statSync(templatePath)
      plugins.push(
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: templatePath,
          minify: {
            collapseWhitespace: true
          }
        })
      )
    } catch (e) {}
  }

  return plugins
}

module.exports = {
  entry: injectEntry(),
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
    modules: [config.input, 'node_modules'],
    extensions: ['.js', '.json', '.scss', '.less', '.jpg', '.png', '.gif', '.webp']
  },
  externals: config.externals,
  plugins: injectPlugins()
};
