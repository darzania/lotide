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

const flatten = function(arr) { // Function to flatten a nested array
  let flatArray = []; // Stores flattened elements in a new array

  for (let i = 0; i < arr.length; i++) { // Loop through the array
    if (Array.isArray(arr[i])) {  // If the current element is an array, its contents are added (pushed) into flatArray
      flatArray.push(...arr[i]);  // ... called the spread operator, it spreads / unpacks the elements of the array into individual pieces

    } else {
      flatArray.push(arr[i]);  // If it's not an array, add the element to flatArray.
    }
  }
  
  return flatArray;  // Return the completed flattened array

};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten(["cat", "dog", ["mouse", "tiger"], "cow", ["raven"]])); // => ['cat', 'dog', 'mouse', 'tiger', 'cow', 'raven']
console.log(flatten([[], 1, [2, 3], 4])); // => [1, 2, 3, 4]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => Should Pass
