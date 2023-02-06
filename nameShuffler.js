
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"



function nameShuffler(str){
  
  const arr = str.split(" ")
  
  return arr[1].toString() + " " + arr[0].toString()

}
