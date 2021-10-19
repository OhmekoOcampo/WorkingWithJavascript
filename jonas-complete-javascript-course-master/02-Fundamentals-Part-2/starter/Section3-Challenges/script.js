"use strict"; //Has to be the very first code, to enable strict mode.
//Creates visible errors and forbids certain things when you program.

// (38) Coding Challenge #1

const teamAverageScore = (score1, score2, score3) => {
  let average = (score1 + score2 + score3) / 3;
  return average;
};

const checkWinner = (averageTeam1, teamName1, averageTeam2, teamName2) => {
  if (averageTeam1 > 2 * averageTeam2) {
    console.log(`Team 1 Wins!`);
    console.log(
      `Team ${teamName1} Wins! ${teamName1}:${averageTeam1} vs ${teamName2}:${averageTeam2}`
    );
  } else if (averageTeam2 > 2 * averageTeam1) {
    console.log(`Team 2 Wins!`);
    console.log(
      `Team ${teamName2} Wins! ${teamName2}:${averageTeam2} vs ${teamName1}:${averageTeam1}`
    );
  } else if (averageTeam1 === averageTeam2) {
    console.log(`Team 1 and Team 2 are tied! No winner!`);
    console.log(`${teamName1}:${averageTeam1} vs ${teamName2}:${averageTeam2}`);
  } else {
    console.log(`No winner!`);
    console.log(averageTeam1);
    console.log(averageTeam2);
  }
};

let dolphinAvg1 = teamAverageScore(44, 23, 71);
console.log(dolphinAvg1);
let koalasAvg1 = teamAverageScore(65, 54, 49);
console.log(koalasAvg1);
let dolphinAvg2 = teamAverageScore(85, 54, 41);
console.log(dolphinAvg2);
let koalasAvg2 = teamAverageScore(23, 34, 27);
console.log(koalasAvg2);

checkWinner(dolphinAvg1, "Dolphins", koalasAvg1, "Koalas");
checkWinner(dolphinAvg2, "Dolphins", koalasAvg2, "Koalas");

// (41) Coding Challenge #2

//let bill = 100;

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return 0.15 * bill;
  } else {
    return 0.2 * bill;
  }
};

const bills = [125, 555, 44, 100];

const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[2]),
  calcTip(bills[3]),
];

const totals = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
  calcTip(bills[3]) + bills[3],
];

console.log(bills);
console.log(tips);
console.log(totals);

// (45) Coding Challenge
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.68,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI ${mark.BMI} is higher than ${john.fullName}'s BMI ${john.BMI}!'`
  );
} else if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI ${john.BMI} is higher than ${mark.fullName}'s BMI ${mark.BMI}!'`
  );
} else {
  console.log(`John's and Mark's BMIs are equal!`);
}
