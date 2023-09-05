// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

// Cleaner Code
function twoHighest(arr) {
  const newArray = [...new Set(arr)].sort((a, b) => a - b).reverse()

  return newArray.slice(0, 2)
}


// Old Code
function twoHighest(arr) {

  if (arr.length === 0) {
    return []
  }

  let firstHighest = 0
  let secondHighest = 0
  let result = []


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstHighest) {
      firstHighest = arr[i]
    }
  }

  if (arr.length > 1) {

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== firstHighest && arr[j] > secondHighest) {
        secondHighest = arr[j]
      }
    }
  }

  result.push(firstHighest)
  if (arr.length > 1) {

    result.push(secondHighest)
  }

  console.log(result)
  return result
}
