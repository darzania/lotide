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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { // Checks if both objs have the same # of keys
    return false; // Return false if they dont
  }
  for (let key of Object.keys(object1)) { // Loop through each key in obj 1
    if (!(key in object2)) { // Check if obj 2 has the same key as in obj 1
      return false; // If obj 2 does not have this key, return false
    }

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // If both values are arrays
      if (!eqArrays(object1[key], object2[key])) { // eqArrays will be used to compare them
        return false; // If the arrays are not the same, return false
      }
    } else if (object1[key] !== object2[key]) { // Compares values of the same key in both objs
      return false; // Return false if the key values are different
    }
  }
  return true; // // If all checks pass, objects are equal, return true
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✔✔✔  Assertion Passed: Objects ${inspect(actual)} and ${inspect(expected)} are the same.`);
  } else {
    console.log(`❌❌❌ Assertion Failed: Objects ${inspect(actual)} !== ${inspect(expected)} are not the same.`);
  }
};

module.exports = assertObjectsEqual;