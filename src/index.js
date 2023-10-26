const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubleNumber = [];

// numbers.forEach(function (num) {
//   doubleNumber.push(num * 2);
// });

// numbers.forEach((num) => {
//   doubleNumber.push(num * 2);
// });

const doubleNumbers = numbers.map((num) => "Number: " + num * 2);

// Filters

const evenNumbers = [];

numbers.forEach((num) => {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
});

const evenNumbers2 = numbers.filter((num) => num % 2 === 0);

// Reduce
// let sum = 0;

// numbers.forEach((num) => {
//   sum += num;
// });

const sum = numbers.reduce((previous, current) => previous + current, 0);

const doubleEvenNumbers = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((acc, cur) => acc + cur, 0);

console.log(doubleEvenNumbers);
