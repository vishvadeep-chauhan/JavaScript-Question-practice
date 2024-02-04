// Q:1. Write a JavaScript function to calculate the sum of two numbers.  
// 2. Write a JavaScript program to find the maximum number in an array. 
// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
// 4. Write a JavaScript program to reverse a given string.
//  5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
//  6. Write a JavaScript program to calculate the factorial of a given number. 
//  7. Write a JavaScript function to check if a given number is prime. 
//  8. Write a JavaScript program to find the largest element in a nested array. 
//  9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
//  10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

// -----------------------------------------------------------------------

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));

// -----------------------------------------------------------------------

function max(arr) {
    return Math.max(...arr);
}
console.log(max([1, 2, 3, 4, 5]));

// -----------------------------------------------------------------------

function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse('hello'));

// -----------------------------------------------------------------------

function even(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(even([1, 2, 3, 4, 5]));

// -----------------------------------------------------------------------

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

// -----------------------------------------------------------------------

function prime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
console.log(prime(11));

// -----------------------------------------------------------------------

function largest(arr) {

    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) result = arr[i];
    }
    return result;
}
console.log(largest([1, 2, 3, 4, 5]));

// -----------------------------------------------------------------------

function fibonacci(num) {

    let arr = [0, 1];
    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}   
console.log(fibonacci(10));

// -----------------------------------------------------------------------

function titleCase(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(titleCase('hello world'));

// -----------------------------------------------------------------------

