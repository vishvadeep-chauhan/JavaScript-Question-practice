console.log("A5.9_HW_2")
console.log("-----------------------------")
console.log("Exercise 1")

console.log("-----------------------------")

function printBookDetails(book) {

  if(book.pages >= 500){
    console.log("The book, " + book.title + ", is long")
  }
  else{
     console.log("The book, " + book.title + ", is not long")
  }

}

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  genre : "Fiction, Classic",
  pages : 650
}

 console.log("1.1")
 printBookDetails(book)

console.log("-----------------------------")
 console.log("1.2")

book.cover = "Hard Cover"

console.log("The book, " + book.title + ", has " + book.cover + ".")


console.log("-----------------------------")
 console.log("1.3")

if(book.cover === "Hard Cover" && book.pages > 300){
  console.log("The book, " +  book.title + " is heavy.")
}
else{
  console.log("The book, " +  book.title + " is not heavy.")
}


console.log("-----------------------------")
console.log("Exercise 2")
console.log("-----------------------------")

 console.log("2.1")

function printWeatherData(weatherData){

  
}
const weatherData = {

  city : "Tokyo",
  temperature : "28°C",
  humidity : 70,
  weatherCondition : "Partly Cloudy"
  
}



console.log("weather Data: ", weatherData )

console.log("-----------------------------")
 console.log("2.2")

const newWeatherData = {...weatherData }

console.log("are newweatherData  and weatherData  the same object ? ",newWeatherData === weatherData )


console.log("-----------------------------")
 console.log("2.3")

if(newWeatherData.humidity > 65 ){
  weatherData.weatherCondition = "Cloudy"
}
console.log(newWeatherData)


console.log("-----------------------------")
console.log("Exercise 3")
console.log("-----------------------------")


function bookCompare(book1, book2){

  if(book1.pages > book2.pages){
    return true
  }
  else {
    return false
  }
  
}

const book_1 = {
  title: "To Kill a Mockingbird",
  pages: 281
}
const book_2 = {
  title: "1984",
  pages: 328
}

console.log("does 'To Kill a Mockingbird'have more pages then '1984' ?  " ,bookCompare(book_1, book_2 ))


console.log("-----------------------------")
console.log("Exercise 4")
console.log("-----------------------------")

function compareBooks(book2, book3){

  return book3
  
}

const book2 = {
  title: "Animal Farm",
  author: "George Orwell",
  numberOfPages : 140
}

const book3 = {
  title : "Coming Up for Air",
  author: "George Orwell",
  numberOfPages : 210
}
 console.log("4.1")

console.log( "Book 2: ",book2)
console.log( "Book 3:",compareBooks(book2,book3))

console.log("-----------------------------")
 console.log("4.2")

if(book2.numberOfPages > book3.numberOfPages ){
  console.log(book2.title + " is thicker than " + 
 book3.title)
}
else{
  console.log( book3.title + " is thicker than " + 
 book2.title)
}


console.log("-----------------------------")
 console.log("4.3")

if(book2.author === book3.author){
  console.log("Both books are written by same author, " + book2.author + ".")
}
else{
  console.log("The books are written by different authors.")
}