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

const letterPositions = function(sentence) {
  const results = {};  // Empty object to store letter position

  for (let i = 0; i < sentence.length; i++) {  // Loop through each letter in the given sentence
    let letter = sentence[i];  // Grabs the letter at index i (current index being checked in the loop)

    if (letter !== " ") {  // Ignore spaces since only letter positions need to be tracked
      if (!results[letter]) {  // If the letter is not already a key in the results object
        results[letter] = [];  // Initialize it with an empty array
      }
      results[letter].push(i);  // Adds the current index i to the letter's array
    }
  }

  return results;  // Return the final object containing letter positions
};


assertArraysEqual(letterPositions("hello").h,[3]);  // Should Fail
assertArraysEqual(letterPositions("hello").e,[1]);  // Should Pass
assertArraysEqual(letterPositions("lighthouse").h, [3, 5]);  // Should Pass
assertArraysEqual(letterPositions("toronto").o, [1, 3, 6]);  // Should Pass
