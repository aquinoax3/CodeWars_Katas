// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



function bmi(weight, height) {
  
  const bmiCal = weight/(height ** 2)
  
 if (bmiCal <= 18.5) {
   return "Underweight"
 } else if(bmiCal <= 25) {
   return "Normal"
 } else if(bmiCal <= 30) {
   return  "Overweight"
 } if(bmiCal > 30 ) {
   return "Obese"
 }  

}


//  Cleaner Code

function bmi(weight, height) {
  
  const bmiCal = weight / Math.pow(height, 2)
  
  return bmiCal <= 18.5 ? "Underweight" : bmiCal <= 25.0 ? "Normal" : bmiCal <= 30 ? "Overweight" : "Obese"

}
