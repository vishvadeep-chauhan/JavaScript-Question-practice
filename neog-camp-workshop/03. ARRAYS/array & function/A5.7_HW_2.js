console.log("-------------------")
console.log("1.4")
function findLargestNumberDivisibleBy5() {
  let newArray = [] 
  for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > i) {
        if(numbersArray[i] % 5 === 0){

            newArray = numbersArray[i]
        }
      
      
    }
  }
  return newArray
}

console.log(findLargestNumberDivisibleBy5())