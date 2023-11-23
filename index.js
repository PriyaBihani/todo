const fs = require("fs");
const path = require("path");
const http = require("http");
const os = require("os");
const events = require("events");
const util = require("util");

// fs.readFile("temp.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile(
//   "newFile.txt",
//   "Hey, this is written using writeFile cdsadasf",
//   (err) => {
//     if (err) throw err;
//     console.log("File written successfully");
//   }
// );

const data = fs.readFileSync("temp.txt", "utf8");
console.log(data);

fs.writeFileSync(
  "newFile.txt",
  "Hey, this is written using writeFile cdsadasf"
);
console.log("File written successfully");

console.log("HERE");
