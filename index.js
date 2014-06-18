var path = require('path')
  , fs = require('fs')

module.exports = subdirs

function subdirs(root, maxDepth, cb) {
  if (typeof maxDepth === 'function') {
    cb = maxDepth
    maxDepth = Infinity
  }

  var subs = []
    , pending = 0
    , failed = false

  function fail(err) {
    if (!failed) {
      failed = true
      cb(err)
    }
  }

  function complete() {
    if (--pending === 0) cb(null, subs)
  }

  function enqueue(file, depth) {
    if (depth > maxDepth) return
    pending++
    
    fs.stat(file, _processFile)

    function _processFile(err, stat) {
      if (err) return fail(err)
      if (!stat.isDirectory() || stat.isSymbolicLink()) return complete();
      if (depth >= 0) subs.push(file)
      fs.readdir(file, _processDirectoryListing)

      function _processDirectoryListing(err, files) {
        if (err) return fail(err)
        for (var i = 0, len = files.length; i < len; ++i) {
          enqueue(path.join(file, files[i]), depth + 1)
        }
        complete()
      }
    }

  }

  enqueue(path.normalize(root), -1)
}
