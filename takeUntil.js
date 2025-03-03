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


const takeUntil = function(array, callback) {
  const results = [];

  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }

return results;

};

// Test cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/*
Expected Output

[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

*/

// Additional Tests

const data3 = [1, 2, 3, 4];
const results3 = takeUntil(data3, x => x === 5);
assertArraysEqual(results3, [1, 2, 3, 4]);  // The whole array should be returned

const data4 = ["acura", "honda", "jeep", "dodge"];
const results4 = takeUntil(data4, x => x === "jeep");
assertArraysEqual(results4, ["acura", "honda", "jeep"]);  // Assertion should fail