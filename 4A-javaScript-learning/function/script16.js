// push , pop , shift , unshift , splice , slice , concat , join , indexOf , lastIndexOf , forEach , map , filter , every , some , reduce , reduceRight , sort , reverse , toString , toLocaleString , valueOf , isArray

// push

// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     arr.push(arr[i]);


// }

// // pop

// var arr = [1, 2, 3, 4, 5];
// arr.pop();
// console.log(arr);

// // shift

// var arr = [1, 2, 3, 4, 5];
// arr.shift();
// console.log(arr);

// // unshift  

// var arr = [1, 2, 3, 4, 5];
// arr.unshift(0);
// console.log(arr);

//entries

let obj = { 0: 'a', 1: 'b', 2: 'c' };
var arr = Object.entries(obj);
console.log(arr);




var arr = [11, 2, 3, 4, 5];
var i = arr.entries();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

for (let e of i) {
    console.log(e);
}

let arr = [""]

// splice

// var arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, 6, 7);
// console.log(arr);

// // slice

// var arr = [1, 2, 3, 4, 5];
// var arr1 = arr.slice(2, 4);

// console.log(arr1);

// 



