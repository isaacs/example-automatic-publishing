const autoPushingExample = require('../')

const t = require('tap')

t.match(autoPushingExample, {
  foo: 'bar',
  baz: Function
})
