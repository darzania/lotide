// The without function takes two arrays as arguments, and returns a copy of the first array with any elements present in the second array removed.
const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }

  return newArray;
};

module.exports = without;
