// let  a = 112
// let  b = 23
// if (a > b) {
//     console.log(a)
//     console.log("a is greater than b")
//     console.log("this is if statement")
// } else {    
//     console.log(b)
//     console.log("b is greater than a")
//     console.log("this is else statement")
// }

// get a number from user and check if it is even or odd and print even if no is even and odd print if no is odd
// let a = prompt("enter a no: ");
// if (a % 2 == 0) {
//     console.log("even")
// }
// else {
//     console.log("odd")
// }


// let a = prompt("enter a no: ");
// a = number(a);
// if (a % 2 == 0) {
//     console.log("even")
// } else {
//      console.log("odd")
// }

// Q - the no is devisable by 3 , 4 and 5 print ;
// let a = prompt("enter a no: ");
// if (a % 3 == 0 && a % 4 == 0 && a % 5 == 0) {
//     console.log("yes , devisable by 3 , 4 and 5")
// }
// else {
//     console.log("no , devisable by 3 , 4 and 5")
// }

//Q - sides of triangle and check if  and print triangle is equilater , isosceles traingle ;

// let a = prompt("enter a no: ");
// let b = prompt("enter a no: ");
// let c = prompt("enter a no: ");
// if (a == b && b == c) {
//     console.log("equilater")
// }
// else if (a == b || b == c || c == a) {
//     console.log("isosceles traingle")
// }
// else {
//     console.log("scalene traingle")
// }


// Q - take three side and chack it is triengle or not ;
// let a = prompt("enter a no: ");
// a = number(a);
// let b = prompt("enter a no: ");
// b = number(b);
// let c = prompt("enter a no: ");
// c= number(c);

// if (a + b > c && b + c > a && c + a > b) {
//     console.log("yes , it is a triangle")
// }
// else {
//     console.log("no , it is not a triangle")
// }

// Q - take three side and chack it is triengle or not and print type of triangle ;

// let a = prompt("enter a no: ");
// a = Number(a);
// let b = prompt("enter a no: ");
// a = Number(b);
// let c = prompt("enter a no: ");
// a = Number(c);

// if (a + b > c && b + c > a && c + a > b) {
//     console.log("yes , it is a triangle")
//     if (a == b && b == c) {
//         console.log("equilateral")
//     }
//     else if (a == b || b == c || c == a) {
//         console.log("isosceles triangle")
//     }
//     else {
//         console.log("scalene triangle")
//     }
// }
// else {
//     console.log("no , it is not a triangle")
// }

// const a = Number(prompt("Enter a no: "));
// const b = Number(prompt("Enter a no: "));
// const c = Number(prompt("Enter a no: "));

// if (a + b > c && b + c > a && c + a > b) {
//     console.log("Yes, it is a triangle");

//     if (a == b && b == c) console.log("Equilateral");
//     else if (a == b || b == c || c == a) console.log("Isosceles triangle");
//     else console.log("Scalene triangle");
// } else {
//     console.log("No, it is not a triangle");
// }

//Q - take a input from prompt and chack wether  a no is even or odd using ternary operator ;

let a = prompt("enter a no: ");
a = Number(a);
let result = a % 2 == 0 ? "even" : "odd";
console.log(result);

