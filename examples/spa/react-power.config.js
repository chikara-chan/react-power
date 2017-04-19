module.exports = {
  input: './src',
  output: './dist',
  publicPath: 'http://cdn.example.com/',
  multi: false,
  ignore: /shared/,
  vendor: ['react', 'react-dom', 'react-loadable', 'react-router-dom'],
  externals: {},
  hot: true,
  hash: true,
  babelrc: {},
  autoprefixer: ['last 2 versions', '> 5%', 'ie > 8'],
  host: 'localhost',
  port: 3000,
  open: false
}
