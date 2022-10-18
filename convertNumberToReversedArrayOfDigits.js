// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]






function digitize(n) {
  //code here
  
  //convert input into string then .split() con convert into an array
  //loop through the array, convert the value from string into a number using Number()
  // push value into resultArr and then reverse()
  const num = String(n).split('');
  const resultArr = [];
  
  for (let i = 0; i < num.length; i++) {
    resultArr.push(Number(num[i]))
  }
  
  
  return resultArr.reverse();
}
