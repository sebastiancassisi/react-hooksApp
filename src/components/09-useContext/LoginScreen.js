import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>LoginScreeen</h1>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            Id: 1234,
            name: 'Sebastian',
          })
        }
      >
        Login
      </button>
    </div>
  );
};
