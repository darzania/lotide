const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✔✔✔  Assertion Passed:  ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

  }
};

const countLetters = function(sentence) {

  const countedLetters = {};  //  Empty object to store the letter counts

  for (const letter of sentence) {  // This for of loop goes through each letter in the sentence
    if (letter !== ' ') {  // Checks if the letter is not a space
      if (countedLetters[letter]) {  // Checks if the letter has already been counted
        countedLetters[letter] += 1;  // Increase the count of the letter if it appears multiple times
      } else {  // If the letter is not yet in countedLetters
        countedLetters[letter] = 1;  // Add the letter with a count of 1
      }
    }
  }

  return countedLetters;  // Return the object with letter counts

};

console.log(countLetters("LHL"));
// Expected output: { L: 2, H: 1 }
const result1 = countLetters('LHL');
assertEqual(result1['L'], 2);
assertEqual(result1['H'], 1);

console.log(countLetters("cats dogs horses"));
// Expected output: { c: 1, a: 1, t: 1, s: 4, d: 1, o: 2, g: 1, h: 1, r: 1, e: 1 }
const result2 = countLetters("cats dogs horses");
assertEqual(result2['c'], 1);
assertEqual(result2['a'], 1);
assertEqual(result2['t'], 1);
assertEqual(result2['s'], 4);
assertEqual(result2['d'], 1);
assertEqual(result2['o'], 2);
assertEqual(result2['g'], 1);
assertEqual(result2['h'], 1);
assertEqual(result2['r'], 1);
assertEqual(result2['e'], 1);  // All above assertions should pass
