console.log("A5.10_HW_1")
console.log("----------------------------")
console.log("Exercise 1")
console.log("----------------------------")

const scores = [{
  name: "Virat",
  edenGardens: 72,
  wankhedeStadium: 88,
  ferozShahKotla: 45,
  Chepauk: 74
},
{
  name: "Rohit",
  edenGardens: 64,
  wankhedeStadium: 41,
  ferozShahKotla: 68,
  Chepauk: 34
},
{
  name: "Shikhar",
  edenGardens: 54,
  wankhedeStadium: 38,
  ferozShahKotla: 72,
  Chepauk: 44
},
{
  name: "Rishabh",
  edenGardens: 22,
  wankhedeStadium: 27,
  ferozShahKotla: 34,
  Chepauk: 51
}
]

console.log("1.1")
for( let i = 0; i < scores.length; i++){
  console.log( 
      "Cricketer: " + scores[i].name + "\n" +
      "Eden Gardens: " + scores[i].edenGardens + "\n" +
      "Wankhede Stadium: " + scores[i].wankhedeStadium + "\n" +
      "Feroz Shah Kotla: " + scores[i].ferozShahKotla + "\n" +
      "Chepauk: " + scores[i].Chepauk + "\n\n"
    )
}
console.log("-------------------------------------")
console.log("1.2")
const chinnaswamyStadiumScores = [54, 82, 49, 45]
for(let i = 0; i< scores.length; i++){
  scores[i].chinnaswamyStadium = chinnaswamyStadiumScores[i]

  console.log(scores[i])
}

console.log("-------------------------------------")
console.log("Exercise 2")
console.log("-------------------------------------")

const klRahulData = {
  name: "KL Rahul",
  edenGardens: 34,
  wankhedeStadium: 56,
  ferozShahKotla: 42,
  Chepauk: 31,
  chinnaswamyStadium: 68
}
console.log("kl Rahul's Data: ",klRahulData)

console.log("-------------------------------------")
console.log("2.2")

scores.push(klRahulData)
console.log("Updated Data: ", scores)

console.log("-------------------------------------")
console.log("2.3")

for(let i = 0; i < scores.length; i++){
  let totalScore =
    scores[i].edenGardens +
    scores[i].wankhedeStadium +
    scores[i].ferozShahKotla +
    scores[i].Chepauk +
    scores[i].chinnaswamyStadium ;

   scores[i].totalScore = totalScore
}

console.log("Array with total marks: ",scores )

console.log("--------------------------------")
console.log("2.4")

for(let i = 0; i < scores.length; i++ ){
  const numberofStadiums = 5
  const average = scores[i].totalScore / numberofStadiums

  scores[i].avgRun = average
  
}
console.log("updated array: ",scores)

console.log("--------------------------------")
console.log("Exercise 3")
console.log("--------------------------------")

for (let i = 0; i < scores.length; i++){
  scorecard(scores[i])
}

function scorecard(scor){
  console.log("===== Score Card for " + scor.name + " =====" + "\n" + "Eden Gardens: " + scor.edenGardens + "\n"  +
"Wankhede Stadium :" + scor.wankhedeStadium + "\n"  +
"Feroz Shah Kotla: "  + scor.ferozShahKotla + "\n"   +
"Chepauk: " + scor.Chepauk + "\n"   +
"Chinnaswamy Stadium: " +  scor.chinnaswamyStadium +  "\n" + "-----\n" +

"Total: "  + scor.totalScore + "\n"   +
"Average: " + scor.avgRun + "\n"   +
"Performance: " +  getPerformance(scor.avgRun) +  "\n\n" +
"------------------------------------"
              
             
)
}

function getPerformance(avg) {
  if(avg >= 80 ){
    return "Good" 
  }
  else if(avg >= 60 && avg <= 79){
    return" Above Average"
  }
  else if(avg >= 45 && avg <= 59){
    return "Average"
  }
  else {
    return "Bad"
  }
}