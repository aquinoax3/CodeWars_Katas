// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.




function arrayPlusArray(arr1, arr2) {
  
  // iterate through arrays & sum elements in both arrays
  const sum1 = arr1.reduce((prev, curr) => prev + curr)
  const sum2 = arr2.reduce((prev, curr) => prev + curr)
    
  // then total up the sums of both array
  const total = sum1 + sum2
  
  return total; 
}
