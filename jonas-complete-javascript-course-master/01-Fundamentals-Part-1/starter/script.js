/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is Fun!");
console.log(40 + 40 + 100 + 20);

/////// (12) Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "ohmeko");

javascriptIsFun = "YES!"; //Example of Dynamic Typing didn't have to assign using let again or define the new type of data to be placed in the variable (container)
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null); //Returns string stating null is of type object, but this is wrong. This is a known bug in javascript. Should return null as the typeof, however due to legacy reasons this was never fixed.
*/

///// (13) let, var, and const
/*
let age = 30;
age = 31; //TECHNICAL TERM: MUTATED THE VARIABLE, meaning you change the value that is stored in the variable.

const birthYear = 1991;
//birthYear = 1990; // Cannot be assigned because const variable will now allow you to rewrite the value store in the varialbe. TECHNICAL TERM: IMMUTABLE VARIABLE, basically a variable whose value cannot be overwritten.

//const job; //Cannot be done because const variables must be instantiated.

var job = "programmer"; //Prior to ES6, var was the way to create variables in java. Know it for legacy reasons.
job = "teacher";
*/

///// (14) Basic Operators (aka yo Math Bois.)
/*
//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3); // 2**3 means 2 to the power of 3, namely 2*2*2 = 8

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah - 2 >= 18;
console.log(isFullAge);
*/

///// (15) Operator Precedence
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
*/
///// (16) Coding Challenge #1

///// (17) Strings and Template Literals
/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

//For ES6 and above you can use TECHNICAL TERM: Template Literals to make string formatting easier.

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; //Use backticks to start and end a Template Literal.
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines"); //Making multiline text the old way with \n character.

console.log(`String 
multiple 

lines`);
*/

///// (18) Taking Decisions if/else statements
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  //If-else control structure
  console.log("Sarah can start driving license!");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years ;)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20; //This variable is not available outside this block.
} else {
  century = 21; //This variable is not avaible outside this block.
}
console.log(century);
*/

///// (19) Coding Challenge 2

///// (20) Type Conversion and Coercion
/*
//Type Conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number("2000") + 18);

console.log(Number("Jonas")); //Will return NaN, returns an invalid number. NaN is of type number, but it is an invalid number

console.log(String(23), 23);

//Type Coercion
//When an operation involves two different value type, JavaScript will automatically convert one fo the value types to match the other.

console.log("I am " + 23 + " years old"); //The number value of 23 will be coerced into a string value.
console.log("I am " + String(23) + " years old"); //In other languages you have to explicitly convert a differnent value type to match the other value types otherwise it will error out.

console.log("23" - "10" - 3); //minus will trigger a string to number conversion.

console.log("23" + "10" + 3);

console.log("23" > "18");

//Good Example of Type Coercion
let n = "1" + 1;
n = n - 1;
console.log(n); //returns 10
*/
///// (21) Truthy and Falsy Values

//5 falsy values: 0, '', undefined, null, NaN
//When you convert these 5 values into a boolean they become false, all other types and values will equate to a truthy value.
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jones"));
console.log(Boolean({}));
console.log(Boolean(""));

//Most of the time type conversion isn't used, rather the conversion of falsy values is done with Type Coercion in most applications.

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should join the squid games!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/
///// (22) Equality Operators == vs. ===
/*
const age = "18";
if (age === 18) {
  //will return a true a false value, true only if both sides are exactly the same.
  console.log("You just became an adult! (strict equality)");
}

if (age == 18) {
  //will return a true a false value, true only if both sides are exactly the same.
  console.log("You just became an adult! (loose equality)");
}

const favorite = prompt("What is your favorite number?"); //Wrap this in a Number() conversion function for strict equality to work.
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7.");
}

if (favorite !== 23) {
  console.log("Why not choose 23?");
}

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
}
*/

///// (23) Logical Operators
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

console.log(0 || 13);
*/

///// (26) The Switch Statement
const day = "saturday"; //In a real application usually this comes from User Input. :) Like a dropdown etc...
/*
switch (day) {
  case "monday": //day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break; //Important so that other code isn't ran, so ony the case you want is ran.
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}
*/
/*
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/

///// (27) Statements and Expressions
3 * 4;
1991;
true && false && !false;

if (23 > 10) {
  //statement are actions that can create expressions.
  const str = "23 is bigger"; //expression evaluates into a value.
}

///// (28) The Conditional (Ternary Operator)
//Similar to an if statement, but written in one line, except that there is a mandatory else statement that is located after a colon.

const age = 23;
age >= 18
  ? console.log("I like to drink wine!")
  : console.log("I like to drink water!");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`); //Ternary Operator can give you a "if-else" quick decision expression as oppose to writing a full blown if-else statment. Remember this and place it in you Developer tool bag. ;)
