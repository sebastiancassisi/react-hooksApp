import React, { useRef } from 'react';
import './effects.css';
const FocusScreeen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus screen</h1>
      <hr />
      <input ref={inputRef} className="form-control" placeholder="Su nombre"></input>
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        {' '}
        Focus
      </button>
    </div>
  );
};

export default FocusScreeen;
