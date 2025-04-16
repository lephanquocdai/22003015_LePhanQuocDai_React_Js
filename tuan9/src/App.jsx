import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import Cart from './components/Cart';
import Auth from './components/Auth';

export default function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: 20 }}>
        <h1>🔥 Redux Toolkit Multi-App</h1>
        <Auth />
        <hr />
        <ThemeToggle />
        <hr />
        <Counter />
        <hr />
        <TodoList />
        <hr />
        <Cart />
      </div>
    </Provider>
  );
}
