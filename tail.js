const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✔✔✔  Assertion Passed:  ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

  }
};

const tail = function(arr) {
  return arr.slice(1);
};



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail(["Elephant"]).length, 0); //An array with only one element should yield an empty array for its tail
assertEqual(tail([]).length, 0); //An empty array should yield an empty array for its tail

assertEqual(tail(words)[0], "Lighthouse"); // first element of returned array should be second element of argument array
assertEqual(tail(words).length, words.length - 1); // tail should have one element less than its input
