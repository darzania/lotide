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

const words = ["horse", "cat", "tiger", "ox", "lion"];

const map = function (array, callback) {
  
  const results = [];
for (let item of array) {
  results.push(callback(item));
}

  return results;

};

const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, []);  // Should fail

const results2 = map(words, (word) => word.length);  
assertArraysEqual(results2, [5, 3, 5, 2, 4]);  // Rest should Pass

const results3 = map(words, (word) => word[word.length -1]);
assertArraysEqual(results3, ["e", "t", "r", "x", "n"]);

const results4 = map(words, (word) => word.toUpperCase());
assertArraysEqual(results4, ["HORSE", "CAT", "TIGER", "OX", "LION"]);