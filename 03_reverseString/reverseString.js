/*

//built-in method: pass string into an array with slipt, revers array and join the letters in 1 string
const reverseString = function (string) {
  return string.split("").reverse().join("");
};

reverseString("hello there");

//for loop method: created an empty string, loop through each letter starting at the end (-1), add each leter to the new string

const reverseString = function (string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString = newString + string[i];
  }
  return newString
  };

reverseString("hello");*/

const reverseString = function (string) {
  return string.split("").reverse().join("");
};

reverseString("");

// Do not edit below this line
module.exports = reverseString;
