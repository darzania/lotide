const countOnly = function(allItems, itemsToCount) {
  const results = {};  // Empty object to store the counts

  for (const item of allItems) {    // Loop through each item in the allItems array (will use firstNames object)
    if (itemsToCount[item]) {  // Check if this item is allowed to be counted (true in itemsToCount)
      if (results[item]) {  // If the item already exists in the results,
        results[item] += 1;  // increment its count
      } else {
        results[item] = 1;  // Else, initialize its count to 1
      }
    }
  }
  return results;  // Return the results object with the counts
};

module.exports = countOnly;

