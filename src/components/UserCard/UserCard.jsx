import React, { useState } from 'react';
import CardItem from './CardItem';

function UserCard() {
  const [bgColors, setBgColors] = useState({
    Manish: '#db1b1bff',
    Demo: '#040000ff',
  });

  const changeCardColor = (name) => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColors((prevColors) => ({
      ...prevColors,
      [name]: randomColor,
    }));
  };

  const handleNameClick = (name) => {
    alert(`Child clicked: ${name}`);
  };

  return (
    <>
      <CardItem
        name="Manish"
        sendToParent={handleNameClick}
        bgColor={bgColors.Manish}
        onChange={() => changeCardColor("Manish")}
      />
      <CardItem
        name="Demo"
        sendToParent={handleNameClick}
        bgColor={bgColors.Demo}
        onChange={() => changeCardColor("Demo")}
      />
    </>
  );
}

export default UserCard;
