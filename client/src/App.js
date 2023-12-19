import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleDec = () => {
    setCount((prevVal) => prevVal - 1);
    console.log(count);
  };

  return (
    <div className="App">
      <button onClick={handleDec}> - </button>
      <br />
      {count} <br />
      <button onClick={handleInc}> + </button>
    </div>
  );
}

export default App;
