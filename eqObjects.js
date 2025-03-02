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

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✔✔✔  Assertion Passed:  ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

  }
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




const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

