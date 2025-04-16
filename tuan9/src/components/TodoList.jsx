import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../features/todoSlice';

export default function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleAdd = () => {
    const text = inputRef.current.value.trim();
    if (text) {
      dispatch(addTodo(text));
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input ref={inputRef} placeholder="New task..." />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
