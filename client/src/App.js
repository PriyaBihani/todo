function App() {
  const name = "Kartik";
  const age = 20;
  const favouriteFoods = ["Pizza", "Burger", "Pasta", "Noodles"];
  const hobbies = ["Reading", "Writing", "Coding"];
  const showHobbies = false;

  const handleClick = (e) => {
    console.log("tis is clicked");
    console.log(e);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div
      className="App"
      style={{
        color: "blue",
        backgroundColor: "seagreen",
        fontFamily: showHobbies ? "cursive" : "monospace",
      }}
    >
      Hello World how are you doing?
      <br />
      <input onChange={handleChange} />
      <button onClick={handleClick}>Click</button>
      <p> Hey, I am {name} and I am doing great</p>
      <p> I am {age} years old</p>
      <ul className="list">
        My favourite foods are:
        {favouriteFoods.map((food) => (
          <li>{food}</li>
        ))}
      </ul>
      {showHobbies && (
        <ul>
          My hobbies are:
          {hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
