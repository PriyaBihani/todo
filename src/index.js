const person = new Object(); // Object constructor syntax

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;

console.log(person);

const obj1 = { a: 1, b: 5, c: 10 };
const obj2 = { d: 67, e: 89, f: 90 };

// spread operator
const obj3 = { ...obj1, ...obj2 };

const obj4 = Object.assign({}, obj1, obj2);

// Array of Objects
const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Doe" },
  { id: 3, name: "Jane" },
];

let output = arr[1].name;

output = Object.keys(person);

output = Object.keys(person).length;

output = Object.values(person);

output = Object.entries(person);

output = person.hasOwnProperty("isAdmin");

output = "isAdmin" in person;

console.log(output);

// Naming

const firstName = "Priya";
const lastName = "Bihani";

const person2 = {
  firstName,
  lastName,
  greet() {
    return `Hello ${this.firstName} ${this.lastName}`;
  },
};
console.log(person2.greet());
console.log(person2);
