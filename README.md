subdirs
====

[![Build Status](http://img.shields.io/travis/jarofghosts/subdirs.svg?style=flat)](https://travis-ci.org/jarofghosts/subdirs)
[![npm install](http://img.shields.io/npm/dm/subdirs.svg?style=flat)](https://www.npmjs.org/package/subdirs)

get a list of all subdirectories

## usage

```js
var subdirs = require('subdirs')

subdirs(root, function(err, dirs) {
  console.log(dirs) // all of your subdirs are in here!
})
```

## api

* `subdirs(rootDir, callback)` list all subdirs of `rootDir`.
* `subdirs(rootDir, depth, callback)` list all subdirs of `rootDir` up to a
  depth of `depth`.

## license

MIT
