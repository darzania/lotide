const assertObjectsEqual = require("../assertObjectsEqual");

const object1 = {
  a: 1,
  b: "dog"
};

const object2 = {
  a: 1,
  b: "dog"
};

const object3 = {
  a: 1,
  b: "cat"
};

assertObjectsEqual(object1, object2); // Should pass
assertObjectsEqual(object1, object3); // Should fail