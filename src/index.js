// document.querySelectorAll()

// Returns a NodeList
const listItems = document.querySelectorAll("li");

// Access the elements by index
console.log(listItems);
// console.log(listItems[1].innerText);

listItems[1].style.color = "red"; // Error

listItems.forEach((item, index) => {
  item.style.color = "red";

  if (index % 2 === 0) {
    item.style.backgroundColor = "lightgrey";
  }
});

// getElementsByClassName()

const listItems2 = document.getElementsByClassName("item");
console.log(listItems2);
console.log(listItems2[0].innerText);

listItems2[0].style.color = "blue";

const listItem2Array = Array.from(listItems2);

listItem2Array.forEach((item) => {
  item.style.color = "black";
});
