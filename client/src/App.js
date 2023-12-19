function App() {
  const name = "Kartik";
  const age = 20;
  const favouriteFoods = ["Pizza", "Burger", "Pasta"];
  const hobbies = ["Reading", "Writing", "Coding"];
  const showHobbies = true;
  return (
    <div className="App">
      Hello World how are you doing?
      <p> Hey, I am {name} and I am doing great</p>
      <p> I am {age} years old</p>
      <ul>
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
