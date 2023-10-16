function sayHello() {
  console.log("Hello, World!");
}

sayHello(); //

function add(num1, num2) {
  console.log(num1 + num2);
}

add(1, 2);
// add(56, 78);
// sayHello();

function subtract(num1, num2) {
  return num1 - num2;
  console.log("this will never happen");
}

let res = subtract(3, 5);

res += 90;
console.log(res);

const myFunction = function () {
  console.log("Hello from myFunction");
};

myFunction();
