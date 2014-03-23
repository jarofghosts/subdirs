var path = require('path')
  , fs = require('fs')

module.exports = subdirs

function subdirs(root, cb) {
  var root = path.normalize(root)
    , subs = []

  var total = 0
    , counter = 0

  get_list(root)

  function get_list(full_path) {
    fs.readdir(full_path, parse_list)

    function parse_list(err, files) {
      if (err) return cb(err)

      total += files.length

      for (var i = 0, l = files.length; i < l; ++i) {
        (function check_path(filename) {
          fs.lstat(filename, check_file)

          function check_file(err, stats) {
            ++counter

            if (err) return cb(err)

            var not_subdir = stats.isSymbolicLink() || !stats.isDirectory()
            not_subdir = not_subdir || subs.indexOf(filename) > -1
          
            if (not_subdir) return counter > total ? finish() : null

            ++total

            subs.push(filename)

            get_list(filename, get_list)
          }
        }(path.join(full_path, files[i])))
      }

      if (++counter > total) finish()
    }
  }

  function finish() {
    cb(null, subs)
  }
}
