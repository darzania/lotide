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

console.log(countLetters("cat dog horses raven"));  
/* Expected output: {
  c: 1,
  a: 2,
  t: 1,
  d: 1,
  o: 2,
  g: 1,
  h: 1,
  r: 2,
  s: 2,
  e: 2,
  v: 1,
  n: 1
}
*/