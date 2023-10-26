if (true) {
  const a = 1;
  let b = 2;
  var c = 3;
  console.log(a);
  console.log(b);
  console.log(c);
}

// console.log(a); // Reference error
// console.log(b); // Reference error
console.log(c);

function run() {
  var d = 100;
  console.log(d, c);
}

run();
// console.log(d);

// Nested scopes

function first() {
  const x = 100;
  function second() {
    const y = 200;
    console.log(x + y, "Nested scope");
  }
  // console.log(y); // Reference error
  second();
}

first();

if (true) {
  const x = 400;

  if (x === 400) {
    const y = 500;
    console.log(x + y, "Nested scope");
  }
  // console.log(y); // Reference error
}
