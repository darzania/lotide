const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten(["cat", "dog", ["mouse", "tiger"], "cow", ["raven"]])); // => ['cat', 'dog', 'mouse', 'tiger', 'cow', 'raven']
console.log(flatten([[], 1, [2, 3], 4])); // => [1, 2, 3, 4]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => Should Pass