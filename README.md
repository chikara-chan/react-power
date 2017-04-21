<h1 align="center">React Power</h1>

<p align="center">
  <a href="https://travis-ci.org/chikara-chan/react-power"><img alt="Travis Status" src="https://img.shields.io/travis/chikara-chan/react-power/master.svg"></a>
  <a href="https://www.npmjs.com/package/react-power"><img alt="NPM" src="https://img.shields.io/npm/v/react-power.svg"></a>
  <a href="https://github.com/chikara-chan/react-power/blob/master/LICENSE"><img alt="LICENSE" src="https://img.shields.io/npm/l/react-power.svg"></a>
</p>

## Introduction

Command line toolkit includes full-featured scripts powered by React ecosystem.

Quickly start a web app development with none configuration, or optionally add a minimal config file when needed.

## Prerequisite

Require Node.js v7.6 or later. (for async/await supporting)

## Getting Started

Creates new work directory.
``` bash
$ mkdir my-app
$ cd my-app
```
Intalls react-power with npm or yarn.
``` bash
$ npm init
$ yarn add --dev react-power
```
Adds scripts to package.json.
``` js
"scripts": {
  "dev": "react-power dev",
  "build": "react-power build",
  "clean": "react-power clean"
}
```
Writes some source code.
``` bash
$ mkdir src
$ echo 'document.getElementById("root").innerHTML = "Hello world!"' > src/index.js
$ echo \
'<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React Power</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>' \
> src/template.html
```
Tries running script `dev`, `build`, `clean`.
``` bash
$ yarn run dev
$ yarn run build
$ yarn run clean
```
## Configuration

Create a file `react-power.config.js` in root directory. In it, you'll configure like this:

``` js
module.exports = {
  input: './src',
  output: './dist',
  publicPath: '/',
  multi: false,
  ignore: /shared/,
  vendor: [],
  externals: {},
  babelrc: {},
  rules: [],
  browserslist: ['last 2 versions', '> 5%', 'ie > 8'],
  cssModules: true,
  hot: true,
  hash: true,
  host: 'localhost',
  port: 3000,
  open: false
}
```

## Options Reference

Option | Type | Default | Description
--- | --- | --- | ---
input | String | './src' | Where react-power resolve source code.
output | String | './dist' |  Where react-power output bundles.
publicPath | String | '/' | Specifies the public URL of the output directory when referenced in a browser.
multi | Boolean | false | Whether is a multi page application or not.
ignore | RegExp | /shared/ | Ignores the module name using regexp only effective when multi is true.
vendor | Array |  | Specifies the vendor modules to make them seperate from main bundle.
externals | Object |  | Provides a way of excluding dependencies from the output bundles.
babelrc | Object |  | Extends built-in babel transforming configuration.
rules | Array |  | Extends built-in loader rules configuration.
browserslist | Array | ['last 2 versions', '> 5%', 'ie > 8'] | Declare supported environments by performing queries both applied to js and css.
cssModules | Boolean | true | Whether enables css modules or not.
hot | Boolean | true | Whether enables hot module replacement or not.
hash | Boolean | true | Whether enables hash and chunkhash bundles or not.
host | String | 'localhost' | Local development server host.
port | Number | 3000 | Local development server port.
open | Boolean | false | Whether open the browser immediately when bundles are finished.

## Buit-in Features

**babelrc**
- `babel-preset-env`
- `babel-preset-stage-0`
- `babel-preset-react`
- `react-hot-loader/babel`

**rules**
- `babel-loader`
- `json-loader`
- `sass-loader`
- `less-loader`
- `stylus-loader`
- `url-loader`

## Examples

See our examples for usage.
- [basic](https://github.com/chikara-chan/react-power/tree/master/examples/basic)
- [multi](https://github.com/chikara-chan/react-power/tree/master/examples/multi)
- [spa](https://github.com/chikara-chan/react-power/tree/master/examples/spa)

## License

Released under the [MIT](https://github.com/chikara-chan/react-power/blob/master/LICENSE) license.
