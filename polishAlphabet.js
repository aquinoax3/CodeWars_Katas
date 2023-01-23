// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"




function correctPolishLetters (string) {
  
  let newString = ""
  
  for (let i = 0; i < string.length; i++) {
    
    let char = string[i]     
   
    if(char === "ą") {
      char = "a"
      newString += char
    } else if (char === "ć") {
        char = "c"
       newString += char
    } else if (char === "ę") {
       char = "e"
       newString += char       
    } else if (char === "ł" ) {
        char = "l"
        newString += char
    } else if (char ==="ń") {
         char = "n"
       newString += char     
    } else if (char ==="ó") {
        char = "o"
       newString += char
    } else if (char === "ś") {
          char = "s"
       newString += char    
    } else if (char === "ź" ) {
          char = "z"
       newString += char    
    } else if (char === "ż") {
          char = "z"
       newString += char    
    } else {
      newString += char
    }
    
  }
  
  return newString
}
  
