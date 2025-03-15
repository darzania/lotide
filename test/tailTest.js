const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns the tail of an array (all elements except first one)", () => {
    const input = ["Yo Yo", "Lighthouse", "Labs"];
    const expectedResult = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), expectedResult);
  });

  it("returns an empty array when given an array with one element", () => {
    assert.deepEqual(tail(["Elephant"]), []);
  });

  it("returns an empty array when given an empty array", () => {
    assert.deepEqual(tail([]), []);
  } )

  it("returns the second element of the input array as the first element of the tail", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const wordsTail = tail(words); // Store the result of tail(words) in a variable
    assert.deepEqual(wordsTail[0], "Lighthouse"); // Check the first element of the tail is the second element of the input array
  });

  it("returns a tail with one less element than the input array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const wordsTail = tail(words); // Store the result of tail(words) in a variable
    assert.deepEqual(wordsTail.length, words.length - 1); // Check that the length of the tail is one less than the original array
  });

});



