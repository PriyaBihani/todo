// function add(a, b) {
//   return a + b;
// }

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => a - b;

const double = (a) => a * 2;

const createObj = () => ({
  name: "Priya",
});

console.log(add(3, 4));
console.log(subtract(3, 4));
console.log(double(3));

console.log(createObj());

// ForEach

const numbers = [1, 2, 8, 4, 9, 10];

numbers.forEach((num) => console.log(num, "sdfs"));

function callCallbackfn(callback) {
  callback();
}

callCallbackfn(() =>
  console.log("Hello, I am called from inside the function")
);
