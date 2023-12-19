import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

// const Greeting = ({ userName, age }) => {
//   // console.log(props);
//   return (
//     <h1>
//       Hello, {userName}. I am {age} years old
//     </h1>
//   );
// };

const Toggle = ({ isSwitchOn }) => {
  return <div>{isSwitchOn ? <h1>ON</h1> : <h1>OFF</h1>}</div>;
};

const Button = ({ handleClick }) => {
  return <button onClick={handleClick}>Click me</button>;
};

function App() {
  const userName = "Deepak";
  const age = 10;

  const isSwitchOn = false;

  const handleClick = () => {
    alert("clicked");
  };

  return (
    <div className="App">
      {/* <Toggle isSwitchOn={isSwitchOn} /> */}

      <Button handleClick={handleClick} />

      {/* <Greeting userName={userName} age={age} /> */}
      {/* <Header />
      <TodoList />
      <Footer /> */}
    </div>
  );
}

export default App;
