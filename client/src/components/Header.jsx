import { useState } from "react";
import { nanoid } from "nanoid";

function Header({ setTodos }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: nanoid(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        value={input}
        onChange={handleInput}
        type="text"
        placeholder="Add a new task"
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}

export default Header;
