import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todos/todoSlice";

import EditTodoPopup from "./EditTodoPopup";


/**
 * TodoItem component renders a single todo item with options to edit or remove it.
 * @param {Object} todo - The todo item object
 * @param {number} todo.id - The ID of the todo item
 * @param {string} todo.content - The content of the todo item. 
 * @returns {JSX.Element} The rendered component
 */

function TodoItem({ todo }) {
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();


  /**
   * Handles the edit button click
   * @param {string} editContent - The current content of the todo item
   */
  function handleEdit(editContent) {
    setEditMode(true);
  }


  /**
   * Handles closing the edit popup.
   */
  const handleClose = () => {
    setEditMode(false);
  };


  /**
   * Handles saving the edited todo item.
   * @param {string} newText  - The new text for the todo item.
   */
  const handleSave = (newText) => {
    dispatch(
      updateTodo({
        id: todo.id,
        content: newText,
      })
    );
    setEditMode(false);
  };

  return (
    <>
      <ul className="w-3/5 mx-auto">
        <li className="mt-4 flex justify-between items-center px-4 py-2 rounded bg-zinc-600">
          <span className="text-white">{todo.content}</span>

          <div className="buttons flex">
            <button
              onClick={() => handleEdit(todo.content)}
              className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 me-2  dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900"
            >
              <svg
                width="2em"
                height="1.5em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 14V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V14"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17V3M12 3L7 8.44446M12 3L17 8.44444"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="1.5em"
                viewBox="0 0 512 512"
              >
                <rect
                  width="448"
                  height="80"
                  x="32"
                  y="48"
                  fill="currentColor"
                  rx="32"
                  ry="32"
                />
                <path
                  fill="currentColor"
                  d="M74.45 160a8 8 0 0 0-8 8.83l26.31 252.56a1.5 1.5 0 0 0 0 .22A48 48 0 0 0 140.45 464h231.09a48 48 0 0 0 47.67-42.39v-.21l26.27-252.57a8 8 0 0 0-8-8.83Zm248.86 180.69a16 16 0 1 1-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 0 1-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0 1 22.63-22.62L256 273.37l44.68-44.68a16 16 0 0 1 22.63 22.62L278.62 296Z"
                />
              </svg>
            </button>
          </div>
        </li>
      </ul>

      {editMode && (
        <EditTodoPopup
          text={todo.content}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </>
  );
}

export default TodoItem;
