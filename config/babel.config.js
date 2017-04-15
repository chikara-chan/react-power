module.exports = {
	cacheDirectory: true,
	presets: [
    ['env', {
      targets: {
        browsers: ['last 2 versions', '> 5%', 'ie > 8']
      },
      modules: false,
      useBuiltIns: true
    }],
		'react'
	],
	plugins: [
	  'react-hot-loader/babel'
	]
};
