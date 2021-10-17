"use strict"; //Has to be the very first code, to enable strict mode.
//Creates visible errors and forbids certain things when you program.

///// (32) Activating Strict Mode
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriverLicense = true;
}

if (hasDriversLicense) {
  console.log("I can drive :D");
}

const interface = "Audio";

const private = 534;
*/

///// (33) Functions
// Can return and recieve data. You can think of the as a processing machine.
/*
function logger() {
  //function definition.
  console.log("My name is Jonas");
}

logger(); //Calling, Invoking, Running are all word to describe using a function.
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/
// (34) Function Declarations vs. Expressions (The Two Types of JavaScript Functions)
// Know both ways since each way of making a function is important.
/*
console.log(calcAge1(1992));

function calcAge1(birthYear) {
  //function declaration
  //function declaration, allow you to call the function even before the declaration of the function.
  //hoisting allows this capability.
  const age = 2037 - birthYear;
  return age;
}

const age1 = calcAge1(1991);
console.log(age1);

console.log(calcAge2(1992)); //Cannot call calcAge2 function expression before definition - Results in: Cannot access 'calcAge2' before initialization

const calcAge2 = function (birthYear) {
  //function expression this is an anonymous function.
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age2);
*/
// (35) Arrow Function
// This function expression was added to ES6
/*
//const calcAge2 = function (birthYear) {
//function expression this is an anonymous function.
//return 2037 - birthYear;
//};

const calcAge3 = (birthYear) => 2037 - birthYear; //Still a function expression but with an arrow.
//No need for an explicit Return keyword. Excellent for one liner functions. But if more than one line then you need a Return keyword.

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstname} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

//NOTE: Arrow functions do not get a "this" keyword. Typically used in one liners, and in other situations. Learning when to use a Arrow function over the other Normal Function Expression and Function Declaration requires experience sometimes.
*/

// (36) Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

// (37) Reviewing Functions
/*
const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstname} retires in ${retirement}`;
};

const yearsUntilRetirementNew = function (birthYear, firstname) {
  const retirement = calculateRetirement(calculateAge(birthYear));
  if (retirement < 0) {
    console.log(`${firstname} is retired already! Yatta!`);
    return -1;
  } else {
    console.log(`${firstname} retires in ${retirement}`);
    return retirement;
  }
};

//console.log(yearsUntilRetirementNew(1991, "Ohmeko")); //Cannot call it here since calculateAge and calculateRetirement functions not defined yet.

const calculateAge = function (birthYear) {
  const age = 2037 - birthYear;
  return age;
};

const calculateRetirement = function (age) {
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirementNew(1991, "Ohmeko"));
console.log(yearsUntilRetirementNew(1970, "Sei"));
*/

// (38) Coding Challenge #1
