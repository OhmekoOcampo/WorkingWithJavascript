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

// (39) Introduction to Arrays
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

//Most programming is all about processing data, storing data, and using data.

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

//const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay"; //Only primitive values are immutable but arrays are not primative so they have different rules.
console.log(friends);

//friends = ['Bob','Alice']; //You cannot overwrite the array like this because of const keyword.

const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];

console.log(jonas);

const calculateAge = function (birthYear) {
  const age = 2037 - birthYear;
  return age;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calculateAge(years[0]);
const age2 = calculateAge(years[1]);
const age3 = calculateAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3]; //REMEMBER array inputs must be expressions, resolve to a value.
calculateAge(years[years.length - 1]);

//console.log(calculateAge(years));

years + 10; //converts years array to string and appends 10 to the end.
years - 10; //NaN
*/

// (40) Basic Array Operations (Methods)
/*
const friends = ["Michael", "Steven", "Peter"];

//Add Elements
const newLength = friends.push("Jay"); //adds new element to end of array.
console.log(friends);
console.log(newLength);

friends.unshift("John"); //adds new element to beginning of array.
console.log(friends);

//Remove Elements
friends.pop(); //removes last element of array.
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

//New ES6 Basic Array method
//This method use a strict equality for this check is more modern version of indexOf.
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
  //Use case of the includes method.
  console.log("You have a friend called Steven");
}
*/

// (42) Introduction to Objects
/*
//For arrays to get particular elements in the array you need to know their index.
//Order matters for arrays, structured data is best represented with arrays.
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

//For objects you need to know an elements particular key and the element's value will corresponding to that key can be accessed.
//For terminology an element in an object is called a property of the Object.
//Order does not matter in Objects, unstructured data is best represented with objects.

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
};

console.log(jonas);
console.log(jonas.lastName); //here only the key can be used.
console.log(jonas["lastName"]); //You can put an expression here in the brackets.

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//console.log(jonas.'last' + nameKey) //This is not allowed, will throw an error.

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

//console.log(jonas.interestedIn);
console.log(jonas[interestedIn]);
//Will throw an error. You will get undefined for accessing a property on an Object that doesn't exist. You have to use [] notation here because . notation is only for exact key value pairs, it doesn't take expressions.

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong Request, Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

//InPromptu Challenge in (43) Lecture
jonas.friendDescription = `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`;

console.log(jonas);
*/
// Lecture (44) Object Methods
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  age: 2037 - 1991,
  job: "teacher",
  friends: [],
  hasDriversLicense: false,

  //Normal function usage, use jonas.calcAge(parameter)
  //calcAge: function(birthYear) { //Function Expression just looks a little different cause it's now a property of the jonas object. when a function is property of an object then it is called a METHOD. It so happens this property has function value. Hell yeah!
  // return 2037 - birthYear;
  //}

  //Instead of have having a parameter we use a internal property of the object.
  //calcAge: function () {
  //console.log(this);
  //return 2037 - this.birthYear;
  //},

  //Instead of calling the function multiple times let the function calculate once and store it as property in the object. In this case we make an age property.
  //This is the most efficient.
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  statementJonas: function () {
    console.log(
      `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and ${
        this.hasDriversLicense
          ? "he has a driver's license"
          : "he does not have a driver's license"
      }`
    );
  },
};

//console.log(jonas.calcAge());
//console.log(jonas.calcAge());
//console.log(jonas.calcAge());
//console.log(jonas.calcAge());
//console.log(jonas['calcAge'](1991));

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
jonas.statementJonas();

//Arrays were always Objects themselves, MIND blown! XD
*/
// (45) Coding Challenge #3

// (46) Iteration: The for loop - When you know how many iterations!

//We want to avoid repetition like this so we use for loop, or other loops to make this looping succint.
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

//for loop keeps running while condition is true.
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// (47) Looping Arrays, Breaking and Continuing:
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];
const types = [];

//console.log(jonas[0]);
//console.log(jonas[1]);
//...
//console.log(jonas[4])

for (let i = 0; i <= jonas.length - 1; i++) {
  console.log(jonas[i], typeof jonas[i]);
}

for (let i = 0; i <= jonas.length - 1; i++) {
  //types[i] = typeof jonas[i]; //filling an array.
  types.push(typeof jonas[i]);
}

for (let i = 0; i <= types.length - 1; i++) {
  console.log(types[i]);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i <= years.length - 1; i++) {
  //ages[i] = 2037 - years[i];
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log("----Continue Example----");
for (let i = 0; i <= jonas.length - 1; i++) {
  if (typeof jonas[i] !== "string") continue; //it will skip all the non-string elements in the array.
  console.log(jonas[i], typeof jonas[i]);
}
console.log("----Break Example----");
for (let i = 0; i <= jonas.length - 1; i++) {
  if (typeof jonas[i] === "number") break; //it will skip all the non-string elements in the array.
  console.log(jonas[i], typeof jonas[i]);
}
*/

// (48) Looping Backwards and Loops in Loops

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting Exercise: ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}

// (49) The While Loop - If you don't know how many iterations.
//For Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}

//While Loop, equivalent.
let i = 1;
while (i <= 10) {
  console.log(`Lifting weight repetition ${i}`);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
