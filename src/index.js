let output;
const person = {
  fullName: "Priya Bihani",
  age: 21,
  isAdmin: true,
  hobbies: ["Reading", "Writing", "Coding"],
  //   address: {
  //     city: "Jaipur",
  //     state: "Rajasthan",
  //     coordinates: {
  //       lat: "89.900",
  //       log: "90.000",
  //     },
  //   },

  greet() {
    // console.log(this, "this");
    console.log("Hello, my name is " + this.fullName + ".");
  },
};

output = person.fullName; // dot notation
output = person["age"]; // bracket notation

// Updating
person.fullName = "Kavya Bihani";
person.isAdmin = false;

// Adding
person.gradutationYear = 2023;

// Deleting
delete person.age;

person.address = {
  city: "Jaipur",
  state: "Rajasthan",
  coordinates: {
    lat: "89.900",
    log: "90.000",
  },
};

output = person.hobbies[1];

output = person.address.state;
output = person.address.coordinates.lat;

// person.greet = function () {
//   console.log(this, "this");
//   console.log("Hello, my name is " + this.fullName + ".");
// };

output = person;
person.greet();

console.log(output);
