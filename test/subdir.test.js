var subdirs = require('../')

var test = require('tape')
  , path = require('path')

test('finds all the subdirs!', function(t) {
  t.plan(2)

  subdirs(__dirname, function(err, dirs) {
    t.ok(!err, 'no error')

    var expected = [
        f('a')
      , f('b')
      , f('b/c')
      , f('d')
      , f('.e')
    ]

    t.deepEqual(expected.sort(), dirs.sort(), 'finds all subdirs')
  })
})

test('returns empty array if no subdirs', function(t) {
  t.plan(2)

  subdirs(f('a'), function(err, dirs) {
    t.ok(!err, 'not an error')
    t.deepEqual([], dirs, 'empty array')
  })
})

function f(dir) {
  return path.join(__dirname, dir)
}
