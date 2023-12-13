// sum on the browser

function sum() {
  document.getElementById("vishv").innerHTML = 50 + 60;
}

// <!--------------------------- -->
// text big

function textBig() {
  document.getElementById("idOfText").style.fontSize = "50px";
}

// ----------------------------
// text color change
function textcolor() {
  document.getElementById("idOfText2").style.color = "red";
}

// -----------------------------------
// text hide
function textHide() {
  document.getElementById("idOfText3").style.display = "none";
}

// -----------------------------------
// text change
function textChange() {
  document.getElementById("idOfText4").innerHTML = "html";
}

// -----------------------------------
// sum


function numSum() {
  let a = 10
  let b = 20
  document.getElementById("idOfText5").innerHTML = "sum is: " + (a + b) + "<br>"
  + "multiply is: " + a * b + "<br>" 
  + "Div.. is: " + a / b + "<br>" 
  + "modu.. is: " + a%b + "<br>" 
  + "sub.. is: " + (a - b) + "<br>" 
  
  
}



const person = { firstName: 'vishvadeep', lastName: 'chauhan' };
const firstName = person.firstName;
const lastName = person.lastName;




// const { firstName, lastName } = person;
