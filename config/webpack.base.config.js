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

  return entry
}

function injectPlugins() {
  const plugins = [
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
              chunks: [`${filename}/bundle`]
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
          template: templatePath
        })
      )
    } catch (e) {}
  }

  return plugins
}

module.exports = {
  entry: injectEntry(),
  output: {
    path: path.resolve(config.output),
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
    extensions: ['.js', '.json', '.scss', '.less', '.jpg', '.png', '.gif', '.webp']
  },
  plugins: injectPlugins()
};
