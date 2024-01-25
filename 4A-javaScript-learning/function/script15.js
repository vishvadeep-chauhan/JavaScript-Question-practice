// let student1 = {
//   name: "reena",
//   roll: 45,
//   fees: 252556,
//   marks: 233
// };

// let student2 = {
//   name: "tina" ,
//   roll: 42,
//   fees: 6465,
//   marks: 341
// }

// let getInfo = function (a, b, c) {
//   console.log(this)
//   console.log(this.name, this.roll, this.fees, this.marks)
// };

// // getInfo();

// let getInfo1 = getInfo.bind(student1)
// getInfo1()

// let getInfoSt2 = getInfo.bind(student2)
// getInfoSt2()


// ----------------------------------------------------------------------

// let student1 = {
//   name: "reena",
//   roll: 45,
//   fees: 252556,
//   marks: 233
// };

// let student2 = {
//   name: "tina" ,
//   roll: 42,
//   fees: 6465,
//   marks: 341
// }

// let getInfo = function (student) {
//   console.log(student);
//   console.log(student.name, student.roll, student.fees, student.marks);
// };

// // getInfo(); // This would not work as expected, as there's no object to reference

// let getInfoSt1 = getInfo.bind(null, student1);
// getInfoSt1();

// let getInfoSt2 = getInfo.bind(null, student2);
// getInfoSt2();


// ----------------------------------------------------------------------------

let student1 = {
  name: "reena",
  roll: 45,
  fees: 252556,
  marks: 233
};

let student2 = {
  name: "tina" ,
  roll: 42,
  fees: 6465,
  marks: 341
}

let getInfo = function (student) {
  console.log(student);
  console.log(student.name, student.roll, student.fees, student.marks);
};

// getInfo(student1); 

let getInfoSt1 = getInfo.bind(null, student1);
getInfoSt1();

let getInfoSt2 = getInfo.bind(null, student2);
getInfoSt2();

