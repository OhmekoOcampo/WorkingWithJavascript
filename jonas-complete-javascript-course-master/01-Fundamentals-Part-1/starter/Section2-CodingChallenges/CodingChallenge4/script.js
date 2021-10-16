console.log("Coding Challenge #4");

let bill = 275;

let tip = bill > 50 && bill < 300 ? 0.15 : 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip * bill
  }`
);
