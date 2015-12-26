# subdirs

[![Build Status](http://img.shields.io/travis/jarofghosts/subdirs.svg?style=flat-square)](https://travis-ci.org/jarofghosts/subdirs)
[![npm install](http://img.shields.io/npm/dm/subdirs.svg?style=flat-square)](https://www.npmjs.org/package/subdirs)
[![npm version](https://img.shields.io/npm/v/subdirs.svg?style=flat-square)](https://www.npmjs.org/package/subdirs)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![License](https://img.shields.io/npm/l/subdirs.svg?style=flat-square)](https://github.com/jarofghosts/subdirs/blob/master/LICENSE)

get a list of all subdirectories

## Usage

```js
var subdirs = require('subdirs')

subdirs(root, function (err, dirs) {
  console.log(dirs) // all of your subdirs are in here!
})


// or..

subdirs(root)
  .then(function (dirs) {
    // all of your subdirs are in _here!_
  })
```

## API

`subdirs(rootDir[, depth, callback])`

### Notes

* If `callback` is omitted, a promise is returned.
* If `depth` is omitted, it defaults to `Infinity`

## License

MIT
