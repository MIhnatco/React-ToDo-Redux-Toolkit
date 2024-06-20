import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="w-1/2 mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-8 text-center text-red-700">
        Todo List
      </h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
