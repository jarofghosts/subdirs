subdirs
====

[![Build Status](https://travis-ci.org/jarofghosts/subdirs.svg?branch=master)](https://travis-ci.org/jarofghosts/subdirs)

get a list of all subdirectories

## usage

```js
var subdirs = require('subdirs')

subdirs(root, function(err, dirs) {
  console.log(dirs) // all of your subdirs are in here!
})
```

## license

MIT
