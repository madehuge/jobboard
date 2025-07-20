import React from 'react';

function CardItem({ name, sendToParent }) {
  // When the div is clicked, call the function passed from the parent
  const handleClick = () => {
    sendToParent(name); // send name back to parent
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {name}
    </div>
  );
}

export default CardItem;
