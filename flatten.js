const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {

      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔✔✔  Assertion Passed: Arrays ${actual} and ${expected} are the same.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: Arrays ${actual} !== ${expected} are not the same.`);
  }
};

const flatten = function(arr) {
  let flatArray = [];

  for (const i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray.push(...arr[i]);

    } else {
      flatArray.push(arr[i]);
    }
  }
  
  return flatArray;

};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten(["cat", "dog", ["mouse", "tiger"], "cow", ["raven"]])); // => ['cat', 'dog', 'mouse', 'tiger', 'cow', 'raven']
console.log(flatten([[], 1, [2, 3], 4])); // => [1, 2, 3, 4]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => Should Pass
