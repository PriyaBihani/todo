import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const handleComplete = (id) => {
    console.log(id);
    setTodos((prevTodos) => {
      const arr = prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      console.log(arr);
      return arr;
    });
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
  };
  return (
    <div className="App">
      <Header setTodos={setTodos} />
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
