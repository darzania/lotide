const assertEqual = require('./assertEqual');
const head = require('./head');
const tail = require('./tail');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const middle = require('./middle');

const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');

// module.exports = ;

module.exports = {
  assertEqual:  assertEqual,
  assertArraysEqual: assertArraysEqual,
  eqArrays:  eqArrays,
  middle: middle,
  head:  head,
  tail:  tail,

  assertObjectsEqual:  assertObjectsEqual,
  countLetters:  countLetters,
  countOnly:  countOnly,
  findKey:  findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  takeUntil:  takeUntil,
  without:  without
};



/*

 assertObjectsEqual, countLetters, countOnly, eqObjects, findKey, findKeyByValue, letterPositions, takeUntil, and without.

*/