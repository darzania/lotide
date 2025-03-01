const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✔✔✔  Assertion Passed:  ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

  }
}; 

const findKeyByValue = function(bestTVShowsByGenre, show) {
  const keys = Object.keys(bestTVShowsByGenre); // Get all keys

  for (let key of keys) { // Iterate over each key
    if (bestTVShowsByGenre[key] === show) { // Check if value matches
      return key; // Return the key if value matches
    }
  }
  return undefined; // If no match found, return undefined
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama"); // Should Fail