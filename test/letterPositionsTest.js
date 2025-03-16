const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(letterPositions("hello").h,[3]);  // Should Fail
assertArraysEqual(letterPositions("hello").e,[1]);  // Should Pass
assertArraysEqual(letterPositions("lighthouse").h, [3, 5]);  // Should Pass
assertArraysEqual(letterPositions("toronto").o, [1, 3, 6]);  // Should Pass