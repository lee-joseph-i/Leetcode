// Given a string s. You should re-order the string using the following algorithm:

// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

// Return the result string after sorting s with this algorithm.

var sortString = function (s) {
  let result = "";

  let sorted = s.split("").sort();
  let current = "";
  while (sorted.length) {
    current = "";
    let smallestChar = sorted.splice(0, 1)[0];
    result += smallestChar;

    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] !== smallestChar) {
        current = sorted.splice(i, 1)[0];
        result += current;
        smallestChar = current;
        i--; //when you splice, you're going to skip an index.
      }
    }

    if (sorted.length === 0) break; //gotta keep this in mind in the future. when you're splicing, you'll need to constantly keep track of what's left.
    let largestChar = sorted.splice(sorted.length - 1, 1)[0];
    result += largestChar;

    for (let i = sorted.length - 1; i >= 0; i--) {
      if (sorted[i] !== largestChar) {
        current = sorted.splice(i, 1)[0]; //when you splice BACKWARDS though, you don't have to i++; in fact, that would mess you up.
        result += current;
        largestChar = current;
      }
    }
  }
  return result;
};
