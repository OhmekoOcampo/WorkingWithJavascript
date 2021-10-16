/*
const country = "United States";
const continent = "North America";
let population = 329500000;

console.log("My Country is: " + country);
console.log("The continent I am on is: " + continent);
console.log("The population of my country is: " + population);

const isIsland = false;
const language = "English";

//isIsland = true;

let halfCountryPop = population / 2;
console.log(
  "What IF country was split in half? Population of each half: " +
    halfCountryPop
);

let oneBabyAddedToPop = population + 1;
console.log("New baby horray, new population is: " + oneBabyAddedToPop);

let finlandPopulation = 6000000;
console.log(
  "Does your country have a greater population then finland?: " +
    (population > finlandPopulation)
);

let avgPopulation = 33000000;
console.log(
  "Does your country have a lesser population than the average country population: " +
    (population < avgPopulation)
);

let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";

let newDescription = `Japan is in Asia, and it is home to many land of the rising son people`;

if (population > 33000000) {
  console.log("Portugal's population is above average");
} else {
  console.log("Portugal's population is 22 million below avearge");
}

console.log("9" - "5");
console.log("Expected Result: " + 4);

console.log("19" - "13" + "17");
console.log("Expected Result: " + 617);

console.log("19" - "13" + 17);
console.log("Expected Result: " + 23);

console.log("123" < 57);
console.log("Expected Result: " + false);

console.log(5 + 6 + "4" + 9 - 4 - 2);
console.log("Expected Result: " + 1143);
*/

//Lecture Assignment: Equality Operators: == vs. ===
/*
let numNeighbors = Number(
  prompt("How many neighbor countries does your country have?")
);

if (numNeighbors === 1) {
  console.log("Only 1 border!");
} else if (numNeighbors > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders!");
}
*/

//Lecture Assignment: Logical Operators
/*
let speakEnglish = true;
let populationComp = 30000000;
let isPopLess50 = populationComp < 50000000;
let isIsland2 = false;

if (speakEnglish && isPopLess50 && !isIsland2) {
  console.log("You should live in Portugal!");
} else {
  console.log("Portugal does not met your criteria");
}
*/

//Lecture Assignment: The Switch Statement
/*
let language = "chinese";

switch (language) {
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers!");
    break;
  case "english":
    console.log("3rd place in number of native speakers");
    break;
  case "hindi":
    console.log("4th place in number of native speakers");
    break;
  case "arabic":
    console.log("5th place in number of native speakers");
  default:
    console.log("That is a great Language too, keep learning!");
}
*/

//Lecture Assigment: The Conditional (Ternary) Operator
let population = 40000000;

console.log(
  population > 33000000
    ? "Portugal's population is above average"
    : "Portugal's population is below average"
);
