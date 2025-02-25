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

const middle = function(array) {
  let newArray = [];

  if (array.length < 3) {
    return newArray;
  }

  if (array.length % 2 !== 0) {
    newArray.push(array[Math.floor(array.length / 2)]);

  } else {
    newArray.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  
  return newArray;

};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([10, 20, 30, 40, 50, 60])); // => [30, 40]
console.log(middle([10, 20, 30, 40, 50, 60, 70])); // => [40]