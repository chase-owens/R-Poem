import React from 'react';

const Letterlabel = ({ letter }) => {
  return (
    <div
      style={{
        height: 20,
        borderBottom: `thin solid #ffd100`,
        color: '#151515'
      }}
    >
      {letter}
    </div>
  );
};

export default Letterlabel;
