const letterPositions = function(sentence) {
  const results = {};  // Empty object to store letter position

  for (let i = 0; i < sentence.length; i++) {  // Loop through each letter in the given sentence
    let letter = sentence[i];  // Grabs the letter at index i (current index being checked in the loop)

    if (letter !== " ") {  // Ignore spaces since only letter positions need to be tracked
      if (!results[letter]) {  // If the letter is not already a key in the results object
        results[letter] = [];  // Initialize it with an empty array
      }
      results[letter].push(i);  // Adds the current index i to the letter's array
    }
  }

  return results;  // Return the final object containing letter positions
};

module.exports = letterPositions;
