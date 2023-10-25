if (true) {
  const y = 1;
  console.log(y);
}

// console.log(y); // Reference error

const x = 1;
console.log(x, "in global scope");

function run() {
  // Access global variable in function scope
  console.log(x, "in function scope");
}

run();

if (true) {
  console.log(x, "in block scope");
}

// Function are block/function scope
function add() {
  const x = 50;
  const y = 100;
  console.log(x, "in function scope");
  console.log(y + x, "in function scope");
}

add();

// console.log(y); // Reference error

// An if statement are block scope
if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y, "in block scope");
}

// console.log(y); // Reference error

// A for loop are block scope
for (let i = 0; i < 5; i++) {
  let y = 10;
  console.log(i + y, "in block scope");
}

// console.log(i); // Reference error
// console.log(y); // Reference error
