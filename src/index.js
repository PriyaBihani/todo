let name = "Priya";
let age = 20;

let person = {
  name: "deepak",
  age: 30,
};

let newName = name;

newName = "Kartik";

let newPerson = person;
console.log(person, newPerson);
newPerson.name = "Rahul";

// console.log(name, newName);
console.log(person, newPerson);
