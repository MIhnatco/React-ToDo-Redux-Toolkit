import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../features/todos/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-gray-700 rounded border bg-gray-100 py-1 px-3 text-gray-500"
        placeholder="Add a new Todo"
      />

      <button
        type="submit"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 m-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
