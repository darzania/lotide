const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([10, 20, 30, 40, 50, 60])); // => [30, 40]
console.log(middle([10, 20, 30, 40, 50, 60, 70])); // => [40]

assertArraysEqual(middle([1, 2, 3]), [2]); // Should Pass