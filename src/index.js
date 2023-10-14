/*
    1. Indentifiers
    2. keywords - var, let, const
    3. store the data
*/

let firstName; // declaration of variable
firstName = "Priya"; // assigning a value
console.log(firstName);
firstName = "Priyanka";
console.log(firstName);

let lastName = "Bihani"; // initialization of variable
let lastname = "shdfhds";
console.log(lastName);

const age = 20;
console.log(age);

/** Naming varibale rules
 *  1. letter, numbers, _ , $
 *  2. cannot start with number
 *  3. case sensitive
 * 4. keywords cannot be used as variable name
 */

/** Fromatting conventions
 *  1. camelCase: firstName, lastName, ageOfPerson
 *  2. PascalCase: FirstName, LastName, AgeOfPerson
 *  3 underscore: first_name, last_name, age_of_person
 */

// Declaration and initialization of multiple variables in single statement

let a, b, c;

a = 10;

console.log(a);

let d = 30,
  f = 50,
  z;

console.log(d, f, z);
