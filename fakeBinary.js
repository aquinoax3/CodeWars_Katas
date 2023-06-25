// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string





// optomized 

const fakeBin = (x) => x.split("").map(num => num < 5 ? 0 : 1).join("")



// brute

// function fakeBin(x) {
//     let result = ""

//     for (char of x) {
//         Number(char) < 5 ? result += 0 : result += 1
//     }

//     return result
// }