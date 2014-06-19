var path = require('path')
  , fs = require('fs')

module.exports = subdirs

function subdirs(root, maxDepth, cb) {
  if(typeof maxDepth === 'function') {
    cb = maxDepth
    maxDepth = Infinity
  }

  var failed = false
    , pending = 0
    , subs = []

  function fail(err) {
    if(!failed) {
      failed = true
      cb(err)
    }
  }

  function complete() {
    if(--pending === 0) cb(null, subs)
  }

  function enqueue(file, depth) {
    if(depth > maxDepth) return
    pending++
    
    fs.stat(file, processFile)

    function processFile(err, stat) {
      if(err) return fail(err)
      if(!stat.isDirectory() || stat.isSymbolicLink()) return complete()
      if(depth >= 0) subs.push(file)

      fs.readdir(file, processDirectoryListing)

      function processDirectoryListing(err, files) {
        if(err) return fail(err)

        for(var i = 0, len = files.length; i < len; ++i) {
          enqueue(path.join(file, files[i]), depth + 1)
        }

        complete()
      }
    }
  }

  enqueue(path.normalize(root), -1)
}
