import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './effects.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading ...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{author} </p>
          <footer className="blockquote-footer">{quote}</footer>
        </blockquote>
      )}
      <button onClick={increment} className="btn btn-primary">
        Siguiente frase
      </button>
    </div>
  );
};
