'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriversLicense) console.log('I can drive.');

// --------------------------------------------------------

// const interface = 'audio';
// const private =  534;
// // cost if = 23;

// function showAlert(msg){
//     alert(msg);
// }

// showAlert("hello...");


// function logger(){
//     console.log("my name");
// }

// logger();
// logger();

// ---------------------------------------------------------------------------

// function fruitProcessor(apples , oranges){
//     console.log(apples , oranges)
//     const juice =  `apple with ${apples} apple and ${oranges} oranges `;
//     return juice;
//  }
 
//  const appleJuice = fruitProcessor(5, 0);
//  console.log(appleJuice);
 
// -----------------------------------------------------------------------------------

// function calcAge(birthYeah){
//     const age  = 2037 - birthYeah;
//     return age;
// }

// console.log(calcAge(2000));

// ------------------------------------------------------------

// function expression 

// const calcAge2 = function(birthYeah){
//     return 2037 - birthYeah;

// }

// const age2 = calcAge2(1991);
// console.log(age1 , age2); 

// -------------------------------------------------

// Arrow function 

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3)

