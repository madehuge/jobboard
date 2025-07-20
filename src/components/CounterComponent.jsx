import React, { useState } from 'react'

function CounterComponent() {
  const [count, setCount] = useState(0);
  const coutingdata =  () => {
    setCount(count + 1);
    //console.log("Count is: ", count + 1);
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleAuthToggle() {
    setIsLoggedIn(prev => !prev); // toggle login state
  }

  return (
    <>  
    <div><a href="#" className="hreflink" onClick={coutingdata}>ClickMe is {count}</a></div>
    <div><a href="#" className="hreflink" onClick={handleAuthToggle}>Click to {isLoggedIn ? 'Logout' : 'Login'}</a></div>
    <div>Your are {isLoggedIn ? 'Login' : 'Logout'}</div>
    </>
  )
}

export default CounterComponent;
