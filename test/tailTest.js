const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsTail = tail(words); // Store the result of tail(words) in a variable
assertEqual(words.length, 3); // Original array should still have 3 elements!

// Check that tail of an array with one element is an empty array
assertEqual(tail(["Elephant"]).length, 0);

// Check that tail of an empty array is an empty array
assertEqual(tail([]).length, 0);

// Check that the first element of the returned array is the second element of the input array
assertEqual(wordsTail[0], "Lighthouse");

// Check that the returned array has one less element than the input array
assertEqual(wordsTail.length, words.length - 1);