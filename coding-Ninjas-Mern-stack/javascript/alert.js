// // function showAlert(){
// //     alert("hello")
// // }     

// let a = 90;

// let setId = setTimeout(()=>{
//     console.log(a +10);
// }, 5000)
// console.log("setId: " + setId   );

// let b = 100;

// let setId2 = setTimeout(()=>{
//     console.log(b +10);
// }, 5000)

// console.log("setId2: " + setId2   );

// let c = prompt("hello");
// if(c == 10){
//     clearTimeout(id)
// }

// console.log(a+b);



let i = 1;
let id = setInterval(()=>{
    console.log(i);
    if(i == 5){
        clearInterval(id);
    }
    i++;
}, 2000);
