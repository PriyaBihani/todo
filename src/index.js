// document.getElementById()

// Get Attribute
console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").class);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("class"));

// Set Attribute

document.getElementById("app-title").setAttribute("class", "new-class");
// document.getElementById("app-title").setAttribute("id", "whatever");
document.getElementById("app-title").title = "Shopping List";

const title = document.getElementById("app-title");
console.log(title);

// Get / change content
console.log(title.textContent);
title.textContent = "Hello Worlds";
title.innerText = "Hello, Again";
title.innerHTML = `<i>hello inner HTML</i>`;

// Change styles
title.style.color = "red";
title.style.backgroundColor = "black";
title.style.padding = "10px";

// document.querySelector()

console.log(document.querySelector("h1"));
console.log(document.querySelector("#item-list"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("input[type='text']"));
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.style.color = "red";
secondItem.innerHTML = `Juices
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`;
