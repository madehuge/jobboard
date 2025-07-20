import React, { useState } from 'react'

function CounterComponent() {
  const [count, setCount] = useState(0);
  function coutingdata() {
    setCount(count + 1);
    //console.log("Count is: ", count + 1);
  }
  return (
    <>  
    <div><a href="javascript:void(0)" className="hreflink" onClick={coutingdata}>ClickMe is {count}</a></div>
    </>
  )
}

export default CounterComponent;
