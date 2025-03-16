const findKeyByValue = function(bestTVShowsByGenre, show) {
  const keys = Object.keys(bestTVShowsByGenre); // Get all keys

  for (let key of keys) { // Iterate over each key
    if (bestTVShowsByGenre[key] === show) { // Check if value matches
      return key; // Return the key if value matches
    }
  }
  return undefined; // If no match found, return undefined
};

module.exports = findKeyByValue;