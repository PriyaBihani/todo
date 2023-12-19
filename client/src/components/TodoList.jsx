function TodoList({ todos, handleComplete, handleDelete }) {
  return (
    <>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div key={todo.id}>
              {todo.completed ? (
                <li style={{ color: "red" }}>{todo.text}</li>
              ) : (
                <li>{todo.text}</li>
              )}

              <button onClick={() => handleComplete(todo.id)}>Complete</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No todos</p>
        )}
      </ul>
    </>
  );
}

export default TodoList;
