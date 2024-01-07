console.log("A5.7_HW_1")
console.log("-------------------")
console.log("1.1")

const numbersArray = [22, 35, 18, 47, 50, 63];

function printOriginalArray () {
  console.log("Original Array: ", numbersArray)
}
 printOriginalArray () 

console.log("-------------------")
console.log("1.2")
function multiplyNumbersByTwo () {
  let newArray = []
  for (let i = 0; i < numbersArray.length; i++) {
    newArray.push(numbersArray[i] * 2)
  }
  return newArray
}
console.log("Array with each number multiplied by 2: ",multiplyNumbersByTwo ())

console.log("-------------------")
console.log("1.3")

function convertEvenToOdd(numbers) {
  let convertedArray = []
  for (let i = 0; i <numbers.length ; i++) {
    if (numbers[i] % 2 === 0) {   
      convertedArray.push(numbers[i] + 1)
    }
    else {
      convertedArray.push(numbers[i])
    }
  }
  return convertedArray
}
console.log("array with even numbers converted to nearest odd", convertEvenToOdd(numbersArray))

console.log("-------------------")
console.log("1.4")

function findSmallestNumber(numbers) {
  let = smallestNumbers = numbers[0]
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < smallestNumbers){
      smallestNumbers = numbers[i]
    }
  }
  return smallestNumbers
}
console.log("Smallest  Number in the Array: ", findSmallestNumber(numbersArray))