const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✔✔✔  Assertion Passed:  ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);


  }
};

module.exports = assertEqual;


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Horse", "Horse");
assertEqual("Dog", "Cat");
assertEqual(3, 3);
assertEqual(4, 5);