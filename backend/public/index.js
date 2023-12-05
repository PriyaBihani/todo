const apiUrl = "http://localhost:8000/api/todos";

const getToDos = async () => {
  try {
    const res = await fetch(apiUrl);
    const { data, status, msg } = await res.json();

    data.forEach((todo) => {
      addToDoToDOM(todo);
    });
  } catch (error) {
    console.log(error);
  }
};

const addToDoToDOM = (todo) => {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "Delete";
  div.appendChild(deleteBtn);

  if (todo.completed) {
    div.classList.add("done");
  }

  document.getElementById("todo-list").appendChild(div);
};

const createToDo = async (e) => {
  e.preventDefault();

  const newTodo = {
    title: document.querySelector("#todo-form input").value,
  };

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await res.json();

    addToDoToDOM(data);
  } catch (error) {
    console.log(error);
  }
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");
    updateToDo(e.target.dataset.id, e.target.classList.contains("done"));
  }
};

const updateToDo = async (id, completed) => {
  try {
    const res = await fetch(`${apiUrl}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteToDo = async (e) => {
  if (e.target.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;

    try {
      const res = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      e.target.parentElement.remove();
    } catch (error) {
      console.log(error);
    }
  }
};

const init = () => {
  document.addEventListener("DOMContentLoaded", getToDos);
  document.querySelector("#todo-form").addEventListener("submit", createToDo);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);
  document.querySelector("#todo-list").addEventListener("click", deleteToDo);
};

init();
