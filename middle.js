const middle = function(array) {
  let newArray = [];

  if (array.length < 3) {
    return newArray;
  }

  if (array.length % 2 !== 0) {
    newArray.push(array[Math.floor(array.length / 2)]);

  } else {
    newArray.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  
  return newArray;

};

module.exports = middle;