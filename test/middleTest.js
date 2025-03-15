const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle " , () => { 
  it("returns an empty array for an array with one element", () => {
    const result = middle([1]);
    assert.deepEqual(result, []);
  });

  it("returns an empty array for an array with two elements", () => {
    const result = middle([1, 2]);
    assert.deepEqual(result, []);
  });

  it("returns [2, 3] for an array with four elements", () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]);
  });

  it("returns [30, 40] for an array with six elements", () => {
    const result = middle([10, 20, 30, 40, 50, 60]);
    assert.deepEqual(result, [30, 40]);
  });

  it("returns [40] for an array with seven elements", () => {
    const result = middle([10, 20, 30, 40, 50, 60, 70]);
    assert.deepEqual(result, [40]);
  });

});