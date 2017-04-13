module.exports = {
	cacheDirectory: true,
	presets: [
		['es2015',  {
			'modules': false
		}],
		'stage-0',
		'react'
	],
	plugins: [
	  'transform-runtime',
	  'react-hot-loader/babel'
	]
};
