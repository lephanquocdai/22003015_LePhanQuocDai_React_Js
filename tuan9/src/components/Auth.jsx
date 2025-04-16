import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/authSlice';

export default function Auth() {
  const user = useSelector(state => state.auth.user);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const usernameRef = useRef();

  const handleLogin = () => {
    const name = usernameRef.current.value;
    if (name) dispatch(login({ name }));
  };

  return (
    <div>
      <h2>Auth</h2>
      {isLoggedIn ? (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <input ref={usernameRef} placeholder="Enter name" />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}
