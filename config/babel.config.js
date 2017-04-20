const deepAssign = require('deep-assign')
const config = require('../lib/loadConfig')

module.exports = deepAssign(
  {
    cacheDirectory: true,
    presets: [
      [
        'env',
        {
          targets: {
            browsers: config.browserslist
          },
          modules: false,
          useBuiltIns: true
        }
      ],
      'react'
    ],
    plugins: ['react-hot-loader/babel']
  },
  config.babelrc
)
