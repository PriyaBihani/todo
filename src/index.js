let x;
// Array Literal
const numbers = [1, 67, 55, 90, 500];
const mixed = [56, "hello", true, null];

// Array Constructor
const fruits = new Array("Apple", "Banana", "Orange", "Mango");

x = fruits.length;

x = numbers[2] + numbers[0];

x = "this is a " + numbers[2];

// Manipulating Arrays
fruits[1] = "Pineapple";
fruits[3] = "Kiwi";

fruits[fruits.length] = "Watermelon";

fruits.length = 2;

// console.log(x);
// console.log(mixed);
console.log(fruits);
// console.log(numbers);
// console.log(numbers[3], numbers[1]);
