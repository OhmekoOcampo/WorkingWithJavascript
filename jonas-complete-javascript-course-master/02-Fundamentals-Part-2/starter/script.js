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

fruitProcessor(5, 0);
