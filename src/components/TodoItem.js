import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <ul>
      <li className="mt-4 flex justify-between items-center px-4 py-2 rounded bg-zinc-700">
        <span className="text-white">{todo.content}</span>
      </li>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="text-white bg-red-500 border-0"
      >
        Delete
      </button>
    </ul>
  );
}

export default TodoItem;
