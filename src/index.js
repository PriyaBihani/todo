let output;

const fullName = "Priya bihani"; // primitive
const age = 21;

output = "My name is " + fullName + ". and my age is " + age + " years old";

// Template literals
// output = `My name is ${fullName}. and my age is ${age} years old`;

// String constructor
const s = new String("Hello World"); // reference type

// console.log(typeof output, typeof s);

// String methods

output = s.length;
output = fullName.length;

output = s.toUpperCase();
output = fullName.toUpperCase();

output = s.toLowerCase();

output = s[2];

output = s.charAt(4);

output = s.substring(0, 7);

output = s.indexOf("W");
output = s.indexOf("World");

output = "           Hello world";
output = output.trim();

output = s.valueOf();

output = s.split(" ");

console.log(output);
