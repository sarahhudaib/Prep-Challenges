'use strict';

const res = require("express/lib/response");

// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of values use filter to extract odd values.
//  
// Input:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] 
// Output:
// [89, 41, 31, 111, 31]
// 

// const oddFiltration = (arr) => {
//     // write your code here
// }

const oddFiltration = (arr) => {
    // write your code here
    var odd = arr.filter(number => number % 2 === 1);
    return odd;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// Input:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
// Output:
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

// const cvsFiltration = (arr) => {
//     // write your code here
// }
// 
function fullName(arr) {
    // write your code here
    let userFullnames = arr.map(function(element){
        return `${element.firstName} ${element.lastName}`;
    })
   // console.log(userFullnames);
    return userFullnames;
}

const cvsFiltration = (arr) => {
    // let userFullnames = myArray.map(function(element){
    //     return `${element.firstName} ${element.lastName}`;
    // })
    // var result = myArray.filter((x) => { return x.yearsOfExperience > 4 && x.tech=="JS"; });
    // return userFullnames , result;
   if((result = arr.filter(word => word.yearsOfExperience > 4))&& (word.tech=="JS")){
let filter=fullName()+result;
   }
   return filter;
}

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// Given an array of words filter out the words that contain one of the vowels (a, e, i, o, u)

// Input: ['car', 'boy', 'spy', 'building', 'why', 'dry' ]
// Output: ['spy', 'why', 'dry']
// 

// const vowelsFiltration = (arr) => {
//     // write your code here
// } 

const vowelsFiltration = (arr) => {
    // write your code here
    let results = []
       for (let i = 0; i < arr.length; i++) {
           if ((arr[i].startsWith('a')) || (arr[i].startsWith('A')) || (arr[i].startsWith('e')) || (arr[i].startsWith('E')) || (arr[i].startsWith('i')) || (arr[i].startsWith('I')) || (arr[i].startsWith('o')) || (arr[i].startsWith('O')) || (arr[i].startsWith('u')) || (arr[i].startsWith('U'))) 
           {
    results.push(arr[i])
  }
}

return results
} 

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// Input:
// first_Employee = [C, C#, Java, Angular, PHP]
// sec_Employee = [C#, .Net, JavaScript, React, Angular]

// Output:
// result = [C, Java, PHP, .Net, JavaScript, React]

// Hint:
// - the 'include' method can help you, read about it.

// const skillComparison = (arr1, arr2) => {
//     // write your code here
// }

const skillComparison = (arr1, arr2) => {

    // write your code here
    let difference = arr1
                 .filter(x => !arr2.includes(x))
                 .concat(arr2.filter(x => !arr1.includes(x)));
    return this.filter(x => !arr2.includes(x)); 

}

// -------------------------------------------------------------------------------------------------------


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };
