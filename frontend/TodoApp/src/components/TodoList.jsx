import axios from "axios";
const BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;

export default function TodoList({ todos, fetchTodos }) {
  const toggleCompleted = async (todo) => {
    await axios.put(`${BASE_URL}/api/todos/${todo._id}`, { completed: !todo.completed });
    fetchTodos();
  };

  const deleteTodo = async (todo) => {
    await axios.delete(`${BASE_URL}/api/todos/${todo._id}`);
    fetchTodos();
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo._id}>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(todo)} />
          {todo.title}
          <button onClick={() => deleteTodo(todo)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
