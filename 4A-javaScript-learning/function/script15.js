let student1 = {
  hindi: 123,
  english: 500,
  maths: 90,
};

let getInfo = function (a, b, c) {
  console.log(this)
  console.log(this.hindi, this.english)
};

getInfo.call(student1, "hindi", "english", "maths");
