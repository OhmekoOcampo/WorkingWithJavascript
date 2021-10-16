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
