console.log("A5.6_HW_1")
console.log("-------------------------")
console.log("1.1")
const viratKohliRuns = [82, 120, 45, 66, 102, 55, 91, 76, 115, 42]
console.log("runs scored divisible by 3: ")
for(let i = 0; i< viratKohliRuns.length; i++){
  if(viratKohliRuns[i] % 3 === 0){
    console.log(viratKohliRuns[i])
  }
}

console.log("-------------------------")
console.log("1.2")
console.log("runs scored divisible by 5: ")

for( let i = 0; i< viratKohliRuns.length; i++){
  if(viratKohliRuns[i] % 5 === 0){
    console.log(viratKohliRuns[i])
  }
}


console.log("-------------------------")
console.log("1.3")

let newArray = [ ]
for(let i = 0; i< viratKohliRuns.length; i++){
  if(viratKohliRuns[i] % 2 === 0 ) {
    newArray.push(viratKohliRuns[i])
  }
}

console.log("runs scored divisible by 2: ",newArray)

console.log("-------------------------")
console.log("1.4")
let totalRuns = 0
for(let i = 0; i< viratKohliRuns.length; i++ ){
  totalRuns = totalRuns + viratKohliRuns[i]
}


console.log("total runs scored by Virat Kohli: ", totalRuns)

console.log("-------------------------")
console.log("1.5")
let sumOdd = 0
let sumEven = 0
for(let i = 0; i < viratKohliRuns.length; i++){
  if(viratKohliRuns[i] % 2 !== 0){
    sumOdd = sumOdd + viratKohliRuns[i]
  }
  if(viratKohliRuns[i] % 2 === 0){
    sumEven = sumEven + viratKohliRuns[i]
  }
  
}


console.log("Sum of odd runs scored: ",sumOdd )
console.log("Sum of even  runs scored: ",sumEven )