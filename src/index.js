const age = 21;

// if (age >= 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are a minor");
// }

age >= 18 ? console.log("You are an adult") : console.log("You are a minor");

const canVote = age >= 18 ? true : false;
const canVote1 =
  age >= 18
    ? "You can vote"
    : age < 12
    ? "You are a child"
    : "You are a teenager";
console.log(canVote1);

// For loops
// for (let i = 0; i < 10; i++) {
//   // block of code which will be repeated

//   if (i === 7) {
//     console.log("Number 7 is my favorite number");
//   } else {
//     console.log("Number", i);
//   }
// }

// Nested loops

// for (let i = 0; i < 10; i++) {
//   console.log("Outer loop", i);

//   for (let j = 0; j < 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Looping through arrays
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
