import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };

    window.addEventListener('mousemove', mouseMove);

    console.log('Componente Message montado');
    return () => {
      console.log('Componente Message Desmontado');
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Bienvenido Sebastian!</h3>
      <p>
        las coordenadas del cursor son= X:{x} Y:{y}
      </p>
    </div>
  );
};
