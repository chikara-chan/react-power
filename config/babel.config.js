const config = require('../lib/loadConfig')

const babelrc = {
  cacheDirectory: true,
  presets: [
    [
      'env',
      {
        targets: {
          browsers: config.browserslist
        },
        modules: false
      }
    ],
    'stage-0',
    'react'
  ],
  plugins: ['react-hot-loader/babel', 'transform-runtime']
}

if (config.babelrc.presets) {
  babelrc.presets = babelrc.presets.concat(config.babelrc.presets)
}

if (config.babelrc.plugins) {
  babelrc.plugins = babelrc.plugins.concat(config.babelrc.plugins)
}

module.exports = babelrc
