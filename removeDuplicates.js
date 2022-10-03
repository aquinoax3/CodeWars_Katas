// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.



function distinct(a) {
  const result = []
  
  for (let i = 0; i < a.length; i++) {
    if (result.indexOf(a[i]) === -1) {
      result.push(a[i])
    }
  }
  
  return result
  
}
