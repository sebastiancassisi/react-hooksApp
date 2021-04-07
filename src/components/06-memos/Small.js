import React from 'react';

export const Small = React.memo(({ value }) => {
  console.log('Se renderizo el componente Small');

  return <small>{value}</small>;
});
