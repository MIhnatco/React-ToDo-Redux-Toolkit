import React from "react";

function TodoItem({ todo }) {
  return (
    <div>
      <h1>{todo.content}</h1>
    </div>
  );
}

export default TodoItem;
