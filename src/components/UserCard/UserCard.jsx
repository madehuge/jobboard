import React from 'react';
import CardItem from './CardItem';

function UserCard() {

  // This function will receive data from the child
  const handleNameClick = (name) => {
    alert(`Child clicked: ${name}`);
  };

  return (
    <>
      <div><CardItem name="Manish" sendToParent={handleNameClick} /></div>
      <div><CardItem name="Demo" sendToParent={handleNameClick} /></div>
    </>
  );
}

export default UserCard;
