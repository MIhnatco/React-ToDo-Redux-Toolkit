import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
