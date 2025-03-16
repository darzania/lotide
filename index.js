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

const map = require('./map');
const flatten = require('./flatten');

module.exports = {
  assertEqual,
  assertArraysEqual,
  eqArrays,
  middle,
  head,
  tail,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  takeUntil,
  without,
  map,
  flatten
};