import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.content}</h1>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
