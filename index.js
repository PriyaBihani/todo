const express = require("express");

const app = express();

// console.log(app);

app.get("/home", () => {
  console.log("Hello World");
});

const PORT = 8000;
app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}.`);
});
