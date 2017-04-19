# React Power

[![Travis branch](https://img.shields.io/travis/chikara-chan/react-power/master.svg)](https://travis-ci.org/chikara-chan/react-power)
[![npm](https://img.shields.io/npm/v/react-power.svg)](https://www.npmjs.com/package/react-power)
[![npm](https://img.shields.io/npm/l/react-power.svg)](https://github.com/chikara-chan/react-power/blob/master/LICENSE)

Front-end development toolkit includes full-featured scripts powered by React ecosystem.

Quickly start a web app development with none configuration, or optionally add a minimal config file when needed.

## Prerequisite

Require Node.js v7.6 or later. (for async/await supporting)

## Getting Started

Create new work directory.
``` bash
$ mkdir my-app
$ cd my-app
```
Intall react-power by npm or yarn.
``` bash
$ npm install --save-dev react-power
```
Add scripts to package.json.
``` js
"scripts": {
  "dev": "react-power dev",
  "build": "react-power build",
  "clean": "react-power clean",
}
```
Write some source code.
``` bash
$ mkdir src
$ echo 'document.getElementById("app").innerHTML = "Hello world!"' > src/index.js
$ echo
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
  </html>'
  > src/template.html
```
Try using script `dev`, `build`, `clean`.
``` bash
$ npm run dev
$ npm run build
```
## Examples

See more example for usage.
- [basic](https://github.com/chikara-chan/react-power/tree/master/examples/basic)
- [multi](https://github.com/chikara-chan/react-power/tree/master/examples/multi)
- [spa](https://github.com/chikara-chan/react-power/tree/master/examples/spa)

## License

Released under the [MIT](https://github.com/chikara-chan/react-power/blob/master/LICENSE) license.

