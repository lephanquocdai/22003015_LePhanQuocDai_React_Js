import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';

export default function ThemeToggle() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Theme Toggle</h2>
      <p>Current theme: {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}
