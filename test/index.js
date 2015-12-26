var path = require('path')

var test = require('tape')

var subdirs = require('../')

test('finds all the subdirs, maxDepth == 0', function (t) {
  t.plan(3)

  var expected = [
    f('a'),
    f('b'),
    f('d'),
    f('.e')
  ]

  subdirs(__dirname, 0, function (err, dirs) {
    t.ok(!err, 'no error')

    t.deepEqual(expected.sort(), dirs.sort(), 'finds all subdirs')
  })

  subdirs(__dirname, 0).then(function (dirs) {
    t.deepEqual(expected.sort(), dirs.sort(), 'finds all subdirs')
  }).catch(t.fail)
})

test('finds all the subdirs, maxDepth == 1', function (t) {
  t.plan(3)

  var expected = [
    f('a'),
    f('b'),
    f('b/c'),
    f('d'),
    f('.e')
  ]

  subdirs(__dirname, 1, function (err, dirs) {
    t.ok(!err, 'no error')

    t.deepEqual(expected.sort(), dirs.sort(), 'finds all subdirs')
  })

  subdirs(__dirname, 1).then(function (dirs) {
    t.deepEqual(expected.sort(), dirs.sort(), 'finds all subdirs')
  }).catch(t.fail)
})

test('finds all the subdirs, maxDepth == 2', function (t) {
  t.plan(3)

  var expected = [
    f('a'),
    f('b'),
    f('b/c'),
    f('b/c/f'),
    f('d'),
    f('.e')
  ]

  subdirs(__dirname, 2, function (err, dirs) {
    t.ok(!err, 'no error')

    t.deepEqual(expected.sort(), dirs.sort(), 'finds all subdirs')
  })

  subdirs(__dirname, 2).then(function (dirs) {
    t.deepEqual(expected.sort(), dirs.sort(), 'finds all subdirs')
  }).catch(t.fail)
})

test('finds all the subdirs, infinite depth!', function (t) {
  t.plan(3)

  var expected = [
    f('a'),
    f('b'),
    f('b/c'),
    f('b/c/f'),
    f('d'),
    f('.e')
  ]

  subdirs(__dirname, function (err, dirs) {
    t.ok(!err, 'no error')

    t.deepEqual(expected.sort(), dirs.sort(), 'finds all subdirs')
  })

  subdirs(__dirname).then(function (dirs) {
    t.deepEqual(expected.sort(), dirs.sort(), 'finds all subdirs')
  }).catch(t.fail)
})

test('returns empty array if no subdirs', function (t) {
  t.plan(3)

  subdirs(f('a'), function (err, dirs) {
    t.ok(!err, 'not an error')
    t.deepEqual([], dirs, 'empty array')
  })

  subdirs(f('a')).then(function (dirs) {
    t.deepEqual([], dirs, 'empty array')
  }).catch(t.fail)
})

function f (dir) {
  return path.join(__dirname, dir)
}
