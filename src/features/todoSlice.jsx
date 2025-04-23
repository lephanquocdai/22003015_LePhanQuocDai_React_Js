import { createSlice } from '@reduxjs/toolkit';

// Hàm lấy dữ liệu từ localStorage
const loadTodos = () => {
  try {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: 1, text: 'Hoc redux', completed: false },
      { id: 2, text: 'Học React', completed: false },
      { id: 3, text: 'Làm bài tập', completed: true },
    ];
  } catch (error) {
    console.error("Lỗi khi load localStorage:", error);
    return [];
  }
};

// Hàm lưu dữ liệu vào localStorage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const initialState = {
  todos: loadTodos(),
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date().getTime(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      saveTodos(state.todos);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      saveTodos(state.todos);
    },
    toggleCompleted: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodos(state.todos);
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
