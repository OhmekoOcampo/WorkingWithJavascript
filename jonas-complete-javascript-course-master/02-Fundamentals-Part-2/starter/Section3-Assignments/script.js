/* JavaScript Fundamentals Part 2 */

// (33) Lecture: Function Assignment

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

country1 = describeCountry("Japan", 125.8, "Tokyo");
country2 = describeCountry("United States", 329.5, "Washington DC");
country3 = describeCountry("France", 67.39, "Paris");

console.log(country1);
console.log(country2);
console.log(country3);

// (34)  Lecture: Function Declarations vs. Expressions Assignments

worldPop = 7900000000;

function percentageOfWorld1(population) {
  return `The population is ${
    (population / worldPop) * 100
  } percent of the world population`;
}

japanPercent = percentageOfWorld1(125800000);
usPercent = percentageOfWorld1(329500000);
francePercent = percentageOfWorld1(67390000);

console.log(japanPercent);
console.log(usPercent);
console.log(francePercent);

const percentageOfWorld2 = function (population) {
  return `The population is ${
    (population / worldPop) * 100
  } percent of the world population`;
};

japanPercent = percentageOfWorld2(125800000);
usPercent = percentageOfWorld2(329500000);
francePercent = percentageOfWorld2(67390000);

console.log(japanPercent);
console.log(usPercent);
console.log(francePercent);

// (35) Lecture: Arrow Functions

const percentageOfWorld3 = (population) => {
  return `The population is ${
    (population / worldPop) * 100
  } percent of the world population`;
};

japanPercent = percentageOfWorld3(125800000);
usPercent = percentageOfWorld3(329500000);
francePercent = percentageOfWorld3(67390000);

console.log(japanPercent);
console.log(usPercent);
console.log(francePercent);

// (36) Function Calling Other Functions
console.log("Lecture 36: Function Calling Other Functions");

japanPop = 125800000;
usPop = 329500000;
francePop = 67390000;

const describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfWorld3(
    population
  )} of the world`;
};

const JapanStat = describePopulation("Japan", japanPop);
const USStat = describePopulation("United States", usPop);
const franceStat = describePopulation("France", francePop);

console.log(JapanStat);
console.log(USStat);
console.log(franceStat);

// (37)
