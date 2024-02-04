var name = "vishv"
name = name.toUpperCase();
console.log(name);


// Q . create a var that store the name that users enter via prompt

var name = prompt("Enter your name");

// Q  . capitalize the first letter of the name

// a - isolate the first letter

var firstLetter = name.slice(0,1);

// b - capitalize the first letter

firstLetter = firstLetter.toUpperCase();

// c - isolate the rest of the name

var restOfName = name.slice(1,name.length);

// d - change rest of the code to lowercase

restOfName = restOfName.toLowerCase();

// e - concatenate the first letter with the rest of the name

var capitalizedName = firstLetter + restOfName;

// f - log the result

console.log(capitalizedName);




