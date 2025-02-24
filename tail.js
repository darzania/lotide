const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✔✔✔  Assertion Passed:  ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

  }
};
// Returns a new array with the first element of the input array removed
const tail = function(arr) {
  return arr.slice(1);
};



// Test case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsTail = tail(words); // Store the result of tail(words) in a variable
assertEqual(words.length, 3); // Original array should still have 3 elements!

// Test case: Check that tail of an array with one element is an empty array
assertEqual(tail(["Elephant"]).length, 0);

// Test case: Check that tail of an empty array is an empty array
assertEqual(tail([]).length, 0);

// Test case: Check that the first element of the returned array is the second element of the input array
assertEqual(wordsTail[0], "Lighthouse");

// Test case: Check that the returned array has one less element than the input array
assertEqual(wordsTail.length, words.length - 1);

