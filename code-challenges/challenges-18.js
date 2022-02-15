"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
  // write your code here
  const str1 = str.split(" ");
  const str2 = str1[parseInt(str1.length / 2)].length;
  return str2;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
  // write your code here
  let result = true;

  const str11 = str1.split("").sort();
  const str22 = str2.split("").sort();

  if (str11.length === str22.length) {
    str11.forEach((letter, i) => {
      if (letter === str22[i]) {
        ("");
      } else {
        result = false;
      }
    });
  } else {
    result = false;
  }
  return result;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

function targetIndex(arr, int) {
  // write your code here
  
   if (arr.indexOf(int) >= 0){
   return arr.indexOf(int)
   } else {
    return [...arr, int].sort().indexOf(int);
   }

}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };
