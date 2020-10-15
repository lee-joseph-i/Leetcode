var sortString = function (s) {
  let result = "";
  let sorted = s.split("").sort();
  let current = "";
  while (sorted.length) {
    current = "";
    //step 1
    let smallestChar = sorted.splice(0, 1)[0];
    result += smallestChar;

    //step 2
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] !== smallestChar) {
        current = sorted.splice(i, 1)[0];
        result += current;
        //step 3
        smallestChar = current;
        i--;
      }
    }

    //step 4
    if (sorted.length === 0) break;
    let largestChar = sorted.splice(sorted.length - 1, 1)[0];
    result += largestChar;

    //step 5
    for (let i = sorted.length - 1; i >= 0; i--) {
      if (sorted[i] !== largestChar) {
        current = sorted.splice(i, 1)[0];
        result += current;
        //step 6
        largestChar = current;
      }
    }
    //step 7 conditional here
  }
  return result;
};
