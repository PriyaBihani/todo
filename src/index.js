const x = 5;
const y = 10;

// if (x === y) {
//   console.log("x is equal to y");
// } else if (x > y) {
//   console.log("x is greater than y");
// } else {
//   console.log("x is less than y");
// }

// Nested if
const score = 60;

if (score <= 50) {
  console.log("You need to practice more");
  if (score < 30) {
    console.log("Failed");
  } else {
    console.log("Just Passed");
  }
} else if (score > 50 && score < 75) {
  console.log("Keep pushing");
}

const color = "yellow";

// if (color === "red" || color === "blue" || color === "green") {
//   console.log("Color is red or blue");
// }

// Switch case statement (===)

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  case "green":
    console.log("Color is green");
    break;
  default:
    console.log("COlor not supported");
}

// console.log("This is a test");
