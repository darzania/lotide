# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @darzania/lotide`

**Require it:**

`const _ = require('@darzania/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


============================== FUNCTION LIST =====================================================================

1. assertEqual(actual, expected)

    Compares two primitive values (strings or numbers) and shows whether they match.

2. assertArraysEqual(actual, expected)

    Compares two arrays and shows if they are equal or not.

3. eqArrays(arr1, arr2)

    Checks if two arrays are equal and returns true or false.

4. middle(array)

    Returns the middle element of an array. Returns one element if the length is odd, two if even.

5. head(array)

    Returns the first element of an array.

6. tail(array)

    Returns a new array containing everything except the first element.

7. assertObjectsEqual(actual, expected)

    Compares two objects and prints whether they are equal.

8. countLetters(string)

    Counts the occurrences of each letter in a string and returns the counts.

9. countOnly(allItems, itemsToCount)

    Takes an array and an object specifying which elements to count. Returns the counts.

10. eqObjects(obj1, obj2)

    Checks if two objects are equal and returns true or false.

11. findKey(object, callback)

    Returns the first key in an object that meets a given condition.

12. findKeyByValue(object, value)

    Finds and returns the key of a given value in an object.

13. letterPositions(string)

    Returns an object showing each letter in a string depending on the letters index location.

14. takeUntil(array, callback)

    Returns a new array with elements from the original array until the callback returns true.

15. without(array, itemsToRemove)

    Returns a new array with specified elements removed.

16. map(array, callback)

    Applies a function to each element in an array and returns a new array with the results.

17. flatten(array)

    Takes a nested array and returns a new array with all elements flattened into a single level.