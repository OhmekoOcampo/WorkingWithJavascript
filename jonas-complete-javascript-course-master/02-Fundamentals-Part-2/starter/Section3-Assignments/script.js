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

// (37) Reviewing Functions

// No Assignment

// (38) Coding Challenge #1

// (39) Introduction to Arrays

const populations = new Array(125800000, 329500000, 67390000, 109000000);

console.log(populations);

if (populations.length === 4) {
  console.log("Array has 4 elements!");
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

// (40) Assignment: Basic Array Operation (Methods)

const neighbours = ["Mexico", "Canada"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany") === false) {
  console.log("Probably not a central European country!");
}

neighbours[neighbours.indexOf("Mexico")] = "Equestria";
console.log(neighbours);

// (41) Coding Challenge #2

// (42) Introduction to Objects

const myCountry = {
  country: "United States",
  capital: "Washington DC",
  language: "English",
  population: 329500000,
  neighbours: ["Mexico", "Canada"],
};

// (43) Dot vs. Bracket Notation

const myCountry2 = {
  country: "United States",
  capital: "Washington DC",
  language: "English",
  population: 329500000,
  neighbours: ["Mexico", "Canada"],
};

console.log(
  `${myCountry2.country} has ${myCountry2.population} million english-speaking people, ${myCountry2.neighbours.length} neighboring countries and a captial called ${myCountry2.capital}`
);

myCountry2.population = myCountry2.population + 2000000;
console.log(myCountry2.population);
myCountry2["population"] = myCountry2["population"] - 2000000;
console.log(myCountry2["population"]);

// (44) Object Methods

const myCountry3 = {
  country: "United States",
  capital: "Washington DC",
  language: "English",
  population: 329500000,
  neighbours: ["Mexico", "Canada"],
  checkIsIsland: function () {
    if (neighbours.length > 0) {
      this.isIsland = false;
    } else {
      this.isIsland = true;
    }
  },
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} and a captial called ${this.capital}!`;
  },
};

console.log(myCountry3.describe());
console.log(myCountry3.checkIsIsland());
console.log(myCountry3);

// (45) Coding Challenge #3

// (46) Iteration The For Loop

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting!`);
}

// (47) Looping Arrays, Breaking, and Continuing

const populations2 = new Array(125800000, 329500000, 67390000, 109000000);

let worldPop2 = 7900000000;
const percentages2 = [];

function percentageOfWorld147(population) {
  return (population / worldPop2) * 100;
}

for (let i = 0; i <= populations2.length - 1; i++) {
  percentages2.push(percentageOfWorld147(populations2[i]));
}

console.log(percentages2);

// (48) Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i <= listOfNeighbours.length - 1; i++) {
  console.log(listOfNeighbours[i]);
  for (let j = 0; j <= listOfNeighbours[i].length - 1; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

// (49) The While Loop
console.log(
  "While Loop Version of For Loop in 'Looping Arrays, Breaking, and Continuing'"
);

const populations3 = new Array(125800000, 329500000, 67390000, 109000000);

let worldPop3 = 7900000000;
const percentages3 = [];

function percentageOfWorld147(population) {
  return (population / worldPop2) * 100;
}

let i = 0;
while (i <= populations3.length - 1) {
  percentages3.push(percentageOfWorld147(populations3[i]));
  i++;
}

console.log(percentages3);
