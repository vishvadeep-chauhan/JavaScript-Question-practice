console.log("A5.10_HW_2")
console.log("----------------------------")
console.log("Exercise 1")
console.log("----------------------------")

const foodTracker = [{
  day: "Monday",
  breakfast: 300,
  lunch: 300,
  snacks: 150,
  dinner: 500
},
{
  day: "Tuesday",
  breakfast: 250,
  lunch: 450,
  snacks: 200,
  dinner: 550
},
{
  day: "Wednesday",
  breakfast: 350,
  lunch: 550,
  snacks: 100,
  dinner: 700
},
{
  day: "Thursday",
  breakfast: 400,
  lunch: 600,
  snacks: 180,
  dinner: 650
},
{
  day: "Friday",
  breakfast: 280,
  lunch: 480,
  snacks: 120,
  dinner: 580
},
{
  day: "Saturday",
  breakfast: 320,
  lunch: 520,
  snacks: 160,
  dinner: 620
}
]

console.log("1.1")
for(let i = 0; i < foodTracker.length; i++ ){
  console.log("Day: " + foodTracker[i].day + "\n" +
              "Breakfast: " + foodTracker[i].breakfast +  "\n" +
              "Lunch: " + foodTracker[i].lunch  + "\n" +
              "Snacks: " +  foodTracker[i].snacks + "\n" +
              "Dinner: " + foodTracker[i].dinner + "\n "+"\n")
}

console.log("----------------------------")
console.log("1.2")

const midAfternoonCalories = [100, 120, 105, 110, 100, 130]

for(let i = 0; i < foodTracker.length; i++ ){
  foodTracker[i].midAfternoon = midAfternoonCalories[i]
}
console.log(foodTracker)

console.log("----------------------------")
console.log("Exercise 2")
console.log("----------------------------")
console.log("2.1")
const sundayData = {
  day: "Sunday",
  breakfast: 370,
  lunch: 430,
  snacks: 140,
  dinner: 530,
  midAfternoon: 150
}

console.log("sunday's Data: ",sundayData)

console.log("----------------------------")
console.log("2.2")
foodTracker.push(sundayData)
console.log("Updated Data: ", foodTracker)


console.log("----------------------------")
console.log("2.3")
for(let i = 0; i  < foodTracker.length; i++ ){
  let totalCalorie = 
    foodTracker[i].breakfast +
    foodTracker[i].lunch + 
    foodTracker[i].snacks + 
    foodTracker[i].dinner +  
    foodTracker[i].midAfternoon
  
foodTracker[i].totalCalorie = totalCalorie 
  
}
console.log("Array with total Calorie: ",foodTracker )

console.log("----------------------------")
console.log("2.4")

for(let i = 0; i  < foodTracker.length; i++ ){
  let totalCalorieTime = 5
  foodTracker[i].avgCalorie = foodTracker[i].totalCalorie / totalCalorieTime
  
}
console.log("Updated Array: ",foodTracker )


console.log("----------------------------")
console.log("Exercise 3")
console.log("----------------------------")
console.log("3.1")

for(let i = 0; i  < foodTracker.length; i++ ){
  calorieCard(foodTracker[i])
}


  function calorieCard(food){
  console.log("===== Calorie Card for " + food.day + " ===== " + "\n" + "Breakfast: " + food.breakfast + "\n" +
              "Lunch: " + food.lunch + "\n" +
              "Snacks: " + food.snacks + "\n" +
              "Dinner: " + food.dinner + "\n" +
              "Mid Afternoon: " + food.midAfternoon + "\n" +
              "-------" + "\n" +
              "Total: " + food.totalCalorie + "\n" +
              "Average: " + food.avgCalorie + "\n" +
              "Comment: " + getComment(food.totalCalorie) + "\n" + 
              "------ ------- ------ ------ " + "\n\n"
             )
}

function  getComment(avg){
  if(avg <= 1550){
    return "Your calorie intake was within limits"
  }
  else {
    return "Your calorie intake was higher than recommended"
  }
    
}