const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✔✔✔  Assertion Passed:  ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

  }
};

const countLetters = function(sentence) {

const countedLetters = {}; //  Empty object to store the letter counts

for (const letter of sentence) {
  if (letter !== ' ') {
    if (countedLetters[letter]) {  
      countedLetters[letter] += 1;  
    } else {
      countedLetters[letter] = 1;
  }
}
}

return countedLetters; 

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
