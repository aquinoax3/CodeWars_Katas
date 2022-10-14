// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.



function correct(string){
  const array = string.split("")
  const newArray = []
  
  
  
  for(let i = 0; i < array.length; i++) {
    if(array[i] === "0") {
      array[i] = "O"
      newArray.push(array[i])
    } else if(array[i] === "5"){
      array[i] = "S"
      newArray.push(array[i])
    } else if(array[i] === "1") {
      array[i] = "I"
      newArray.push(array[i])
    } else {
      newArray.push(array[i])
    }
  }
  
  return newArray.join("")
}