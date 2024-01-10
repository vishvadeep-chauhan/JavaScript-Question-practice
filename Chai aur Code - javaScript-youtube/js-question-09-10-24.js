// JavaScript Questions:
// Write a JavaScript program to sum 3 and 5 multiples under 1000.
// Calculate the sum of all the numbers in the following array. var numbersArray = [1,13,22,123,49]
// Print the ODD numbers from 7 to 31
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
// Write a JS code to print Even numbers in given array [13,23,12,45,22,48,66,100]
// Write a JS code to print a 2D array [[1, 2],[3, 4],[5, 6]];

// Complete the JavaScript Assignment Questions. And upload on the sheet.

// ---------------------------------------------------------------------------------------------------------

// q1- Write a JavaScript program to sum 3 and 5 multiples under 1000. 

let sum = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum = sum + i;
    }
}
console.log(sum);

// ---------------------------------------------------------------------------------------------------------


// q2- Calculate the sum of all the numbers in the following array. var numbersArray = [1,13,22,123,49]

let numbersArray = [1, 13, 22, 123, 49];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
    sum = sum + numbersArray[i];
}
console.log(sum);

// ---------------------------------------------------------------------------------------------------------

// q3- Print the ODD numbers from 7 to 31

for (let i = 7; i <= 31; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }
}

// ---------------------------------------------------------------------------------------------------------

// q4- Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

let str = "y";
let str1 = "yes";
let str2 = "no";
let str3 = "y";
let str4 = "yes";
let str5 = "no";
let str6 = "y";
let str7 = "yes";

if (str === str1 || str === str2) {

    console.log(str3);
}
else if (str === str4 || str === str5) {
    
        console.log(str6);
    }
    else {
        console.log(str7);
    }

// ---------------------------------------------------------------------------------------------------------

// q5- Write a JS code to print Even numbers in given array [13,23,12,45,22,48,66,100]

let arr = [13, 23, 12, 45, 22, 48, 66, 100];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// ---------------------------------------------------------------------------------------------------------

// q6- Write a JS code to print a 2D array [[1, 2],[3, 4],[5, 6]];

let arr = [[1, 2], [3, 4], [5, 6]];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++)
        console.log(arr[i][j]);
}



