console.log("A5.5_HW_1")
console.log("----------------------------")


const favoriteBooks = ["To Kill a Mockingbird", "Pride and Prejudice", "1984", "The Great Gatsby"];
console.log("1.1")
console.log(favoriteBooks)

console.log("----------------------------")
console.log("1.2")

console.log(favoriteBooks[1])

console.log("----------------------------")
console.log("1.3")

console.log("number of books : ", favoriteBooks.length )

console.log("----------------------------")
console.log("1.4")

console.log(favoriteBooks[favoriteBooks.length-1])

console.log("----------------------------")
console.log("1.5")

for(let i = 0; i<favoriteBooks.length; i++){
  console.log(favoriteBooks[i])
}

console.log("----------------------")
console.log("1.6")

favoriteBooks.push("Harry Potter and the Sorcerer's Stone")

console.log(favoriteBooks)

console.log("----------------------")
console.log("1.7")

console.log("updated number of books: ",favoriteBooks.length)

let ar = [1, 2, 3]
console.log(ar.length)