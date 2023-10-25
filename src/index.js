const cars = ["Ford", "Chevy", "Honda", "Toyota"];
const users = [{ name: "Priya" }, { name: "Riya" }, { name: "Deepak" }];
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// for .... of loop
// for (const item of cars) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// for ... in loop
const obj = {
  color1: "red",
  color2: "green",
  color3: "blue",
  color4: "yellow",
};

for (const key in obj) {
  console.log(key, obj[key]);
}
