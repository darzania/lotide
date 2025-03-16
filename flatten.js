const flatten = function(arr) { // Function to flatten a nested array
  let flatArray = []; // Stores flattened elements in a new array

  for (let i = 0; i < arr.length; i++) { // Loop through the array
    if (Array.isArray(arr[i])) {  // If the current element is an array, its contents are added (pushed) into flatArray
      flatArray.push(...arr[i]);  // ... called the spread operator, it spreads / unpacks the elements of the array into individual pieces

    } else {
      flatArray.push(arr[i]);  // If it's not an array, add the element to flatArray.
    }
  }
  
  return flatArray;  // Return the completed flattened array
};

module.exports = flatten;
