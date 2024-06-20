import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <ul className="w-3/5 mx-auto">
      <li className="mt-4 flex justify-between items-center px-4 py-2 rounded bg-zinc-700">
        <span className="text-white">{todo.content}</span>
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </li>
    </ul>
  );
}

export default TodoItem;
