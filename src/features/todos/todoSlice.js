import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

//slice for todos with initial state, reducers and actions
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        content: action.payload,
      };

      state.todos.push(newTodo);
    },
    
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }, 

    updateTodo: (state, action) => {
      const {id, content} = action.payload
      const todo = state.todos.find((todo) => todo.id === id)

      if(todo){
        todo.content = content
      }
    }
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
