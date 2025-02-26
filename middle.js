const eqArrays = function(arr1, arr2) {  // Function to compare two arrays

  if (arr1.length !== arr2.length) {  // Checks if array lengths are different
    return false;
  }

  for (let i = 0; i < arr1.length; i++) { // Loops through the elements, comparing them

    if (arr1[i] !== arr2[i]) {
      return false;  // Return false if the elements don't match
    }
  }
  return true; // Return true if all the elements match
};

const assertArraysEqual = function(actual, expected) {  // Function prints if two arrays are equal or not
  if (eqArrays(actual, expected)) {  // Uses eqArrays function to compare arrays and logs the result
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
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([10, 20, 30, 40, 50, 60])); // => [30, 40]
console.log(middle([10, 20, 30, 40, 50, 60, 70])); // => [40]

assertArraysEqual(middle([1, 2, 3]), [2]); // Should Pass