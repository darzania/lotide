const assertEqual = require('./assertEqual');
const head = require('./head');
const tail = require('./tail');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const middle = require('./middle');

module.exports = {
  assertEqual:  assertEqual,
  assertArraysEqual: assertArraysEqual,
  eqArrays:  eqArrays,
  middle: middle,
  head:  head,
  tail:  tail
};


