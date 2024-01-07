console.log("A5.9_HW_1")
console.log("-----------------------------")
console.log("Exercise 1")

console.log("-----------------------------")

const citizen  = {
  name: "Ajay",
  age: 70, 
  city:  "Indore"
}

console.log("1.1")
if(citizen.age >= 60){
  console.log(citizen.name + "is a senior citizen.")
}
else{
  console.log(citizen.name + " is not a senior citizen.")
}

console.log("-----------------------------")
console.log("1.2")
citizen.sugarLevel = "Normal"
console.log("Sugar level for " + citizen.name + " is " +
 citizen.sugarLevel )

console.log("-----------------------------")
console.log("1.3")

if(citizen.age >= 60 && citizen.sugarLevel === "Normal" ){
  console.log(citizen.name + " is fit to travel ")
}
else{
  console.log(citizen.name + " is not fit to travel")
}


console.log("-----------------------------")
console.log("Exercise 2")

console.log("-----------------------------")

console.log("2.1")
function releaseMovie(movie){
  
 console.log("movie: ",movie)
  
}

const movie = {
  Title: "MI 7",
  duration: 150,
  isReleased: false
}

releaseMovie(movie)



console.log("-----------------------------")
console.log("2.2")

const newMovie = {...movie}
console.log("Is new movie same as movie: ", newMovie === movie )


console.log("-----------------------------")
console.log("2.3")


if(newMovie.duration > 120){
   newMovie.isReleased = true
}
else{
   newMovie.isReleased
}

console.log( "New Movie: ", newMovie)


 
console.log("-----------------------------")
console.log("Exercise 3")
console.log("-----------------------------")

  
function   movieCompare(movie1, movie2){
  if(movie1.duration > movie2.duration){
    return true
  }
  else{
    return false
  }
}

const movie1 = {
 title : "The Lost City",
 duration: 120
}
const movie2 = {
 title : "Murder Mystery 2",
 duration: 110
}

  console.log("Is '" + movie1.title + "' longer then '"+ movie2.title + "'?" ,movieCompare(movie1, movie2)  )



console.log("-----------------------------")
console.log("Exercise 4")
console.log("-----------------------------")


function printStudentDetails(student ){

  return student
  
}

const student  = {
  name : "Priya",
  age: 14,
  markes: 45
}

console.log("4.1")
console.log ("Student : ", printStudentDetails(student ))

console.log("-----------------------------")
console.log("4.2")


if( student.markes < 60 ){
    student.isTopPerformer  = false 
}
else {
   student.isTopPerformer  = true
}

console.log("Is the student a top performer ?", student.isTopPerformer)

console.log("-----------------------------")
console.log("4.3")

if( student.markes < 60 &&  student.markes >= 40){
  student.grade = "D"
}

     console.log("Student Data: ", student)