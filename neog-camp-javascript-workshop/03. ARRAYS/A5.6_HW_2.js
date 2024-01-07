console.log("A5.6_HW_2")
console.log("-------------------------")
console.log("1.1")

const srkEarnings = [12500020, 15000465, 950000302, 201800006, 
18000000, 11000000, 900054608, 130050087, 140000000, 160000109]
console.log("earnings divisible by 3: ")
for(let i=0; i< srkEarnings.length; i++){
  if(srkEarnings[i] % 3 === 0){
  console.log( srkEarnings[i])
  }
}

console.log("-------------------------")
console.log("1.2")

console.log("earnings  divisible by 5: ")
for(let i=0; i< srkEarnings.length; i++){
  if(srkEarnings[i] % 5 === 0){
  console.log( srkEarnings[i])
  }
}


console.log("-------------------------")
console.log("1.3")

let newArray = []

for(let i=0; i< srkEarnings.length; i++){
  if(srkEarnings[i] % 2 === 0){
  newArray.push(srkEarnings[i])
  }
}
console.log("earnings  divisible by 2: ",newArray )

console.log("-------------------------")
console.log("1.4")
let total = 0
for(let i=0; i< srkEarnings.length; i++){
  total = total + srkEarnings[i]
}

console.log("total earnings of Shahrukh Khan: ",total)

console.log("-------------------------")
console.log("1.5")

let sumOddEarnings = 0
let sumEvenEarnings = 0

for(let i= 0; i < srkEarnings.length; i++){
  if(srkEarnings[i] % 2 !== 0){
    sumOddEarnings = sumOddEarnings + srkEarnings[i]
  }
  if(srkEarnings[i] % 2 === 0){
    sumEvenEarnings = sumEvenEarnings + srkEarnings[i]
  }
  
}

console.log("Sum of odd earnings:",sumOddEarnings)
console.log("Sum of even earnings:",sumEvenEarnings)