function Header() {
  return (
    <>
      <header>
        <h1>ToDo List</h1>
      </header>
      <input type="text" />
      <Button />
    </>
  );
}

function Button() {
  return <button>Add</button>;
}

export default Header;
