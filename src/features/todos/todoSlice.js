import {createSlice} from '@reduxjs/toolkit'

//slice for todos with initial state, reducers and actions
const todoSlice = createSlice({
    name: "todo", 
    initialState : {
        todos: [{id: 1, content: "Create an App"}]
    }, 
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: 1 ,
                content: action.payload 

            }

            state.todos.push(newTodo)
        }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }

    }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer