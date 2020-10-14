var uniqueMorseRepresentations = function (words) {
  let morseTable = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  let objects = {};
  let morseStrings = "";
  let index = 0;

  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      index = alphabet.indexOf(word[i]);
      morseStrings += morseTable[index];
    }
    objects[morseStrings] = true;
    morseStrings = "";
  });

  return Object.keys(objects).length;
};