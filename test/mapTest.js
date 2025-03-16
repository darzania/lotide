const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["horse", "cat", "tiger", "ox", "lion"];

const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, []);  // Should fail

const results2 = map(words, (word) => word.length);  
assertArraysEqual(results2, [5, 3, 5, 2, 4]);  // Rest should Pass

const results3 = map(words, (word) => word[word.length -1]);
assertArraysEqual(results3, ["e", "t", "r", "x", "n"]);

const results4 = map(words, (word) => word.toUpperCase());
assertArraysEqual(results4, ["HORSE", "CAT", "TIGER", "OX", "LION"]);