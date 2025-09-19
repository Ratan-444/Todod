import { useState } from "react";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;

export default function TodoForm({ fetchTodos }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    await axios.post(`${BASE_URL}/api/todos`, { title });
    setTitle("");
    fetchTodos();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New Todo" />
      <button type="submit">Add</button>
    </form>
  );
}
