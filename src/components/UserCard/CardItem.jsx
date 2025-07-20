import React from 'react';

function CardItem({ name, sendToParent, bgColor, onChange }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: '20px',
        margin: '10px',
        color: '#fff',
        cursor: 'pointer',
        borderRadius: '8px'
      }}
      onClick={() => sendToParent(name)} // send data to parent
      onMouseEnter={onChange} // or use onClick/onChange as you wish
    >
      {name}
    </div>
  );
}

export default CardItem;
