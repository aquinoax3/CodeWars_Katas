// Write a function that checks if a given string (case insensitive) is a palindrome.




function isPalindrome(x) {
  const reversedWord = x.split("").reverse().join("")
  
  if (x === reversedWord || x.toUpperCase() === reversedWord.toUpperCase() 
      || x.toLowerCase() === reversedWord.toLowerCase())
  {
    return true
  }
  
  return false
}
