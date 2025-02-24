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



const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsTail = tail(words); // Store the result of tail(words) in a variable

assertEqual(words.length, 3); // Original array should still have 3 elements!

assertEqual(tail(["Elephant"]).length, 0); // An array with only one element should yield an empty array for its tail
assertEqual(tail([]).length, 0); // An empty array should yield an empty array for its tail

assertEqual(wordsTail[0], "Lighthouse"); // First element of returned array should be second element of argument array
assertEqual(wordsTail.length, words.length - 1); // Tail should have one element less than its input
