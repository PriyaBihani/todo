const toDo = {
  todo_id: 1,
  title: "Create Videos",
  user: {
    name: "Priya Bihani",
  },
};

// Converting the object to JSON string
const str = JSON.stringify(toDo);
console.log(str);

// Converting the JSON string to object
const obj = JSON.parse(str);
console.log(obj);

// Destructuring
const {
  todo_id,
  title: todo_title,
  user,
  user: { name },
} = toDo;

console.log(todo_id, todo_title, name, user);

// Arrays Destructuring

const arr = [34, 56, 78, 98, 100];

const [first, second, ...rest] = arr;

console.log(first, second, rest);
