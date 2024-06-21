import React, { useState, useEffect } from "react";

/**
 * EditTodoPopup component renders a popup modal to edit the content of a todo item
 *
 * @param {String} text - The current text of the todo item
 * @param {function} onSave - Function to handle saving the edited todo item
 * @param {function} onClose - Function to handle closing the popup without saving
 * @returns {JSX.Element} The rendered component
 */

function EditTodoPopup({ text, onSave, onClose }) {
  const [changeTodo, setChangeTodo] = useState(text);


  useEffect(() => {
    setChangeTodo(text)
  }, [text])


  /**
   * Handle change in the input field
   * @param {React.ChangeEvent} e - The change event object 
   */

  const handleChange = (e) => {
    setChangeTodo(e.target.value);
  };

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <form>
              <input
                className="my-4 text-blueGray-500 text-lg leading-relaxed"
                type="text"
                value={changeTodo}
                onChange={handleChange}
              />
            </form>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-white bg-red-600 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => onSave(changeTodo)}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTodoPopup;
