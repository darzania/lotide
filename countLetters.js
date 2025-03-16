const countLetters = function(sentence) {

  const countedLetters = {};  //  Empty object to store the letter counts

  for (const letter of sentence) {  // This for of loop goes through each letter in the sentence
    if (letter !== ' ') {  // Checks if the letter is not a space
      if (countedLetters[letter]) {  // Checks if the letter has already been counted
        countedLetters[letter] += 1;  // Increase the count of the letter if it appears multiple times
      } else {  // If the letter is not yet in countedLetters
        countedLetters[letter] = 1;  // Add the letter with a count of 1
      }
    }
  }

  return countedLetters;  // Return the object with letter counts

};

module.exports = countLetters;
