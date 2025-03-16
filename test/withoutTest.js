const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([5, -3, 7, -10, 2], [-3, -10])); // => [5, 7, 2]
console.log(without(["cat", "dog", "bird", "bear"], ["dog", "bird"])); // => ["cat", "bear"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => should PASS

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);