// let x = 10;
// let y = 20;

// console.log(x + y);

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 4));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
});

promise.then((res) => {
  console.log(res);
});

// console.log(document);
// console.log(window);
console.log(fetch);
