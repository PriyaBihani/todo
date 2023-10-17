// Nesting
let x;
const fruits = ["Apple", "Orange", "Banana", "Pineapple", "Mango"];

const berries = ["Strawberry", "Blueberry", "Blackberry"];

// fruits.push(berries);

// x = fruits[5][1];

// const allFruits = [fruits, berries];
// x = allFruits[1][2];

// concat
x = fruits.concat(berries);

// spread operator (...)
x = [...fruits, ...berries];

// Array

x = Array.isArray("lkjsldf");

console.log(x);
