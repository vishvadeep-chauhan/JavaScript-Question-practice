// Q- find the no is prime or not using loop? 

// let num = 2;
// let prime = true;

// if (num === 1) {
//     console.log("1 is not prime number");
// }   
// else if (num > 1) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             prime = false;
//             break;
//         }
//     }
//     if (prime) {
//         console.log(+num ,"is a prime number");
//     } else {
//         console.log( +num ,"is a not prime number");
//     }
// }
// else {
//     console.log("number is not a prime number");
// }

// Q- make fibonacci series using loop?

let n = 10, t1 = 0, t2 = 1;
for (let i = 1; i <= n; ++i) {
    console.log(t1);
    let nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;
}



