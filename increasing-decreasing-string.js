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
