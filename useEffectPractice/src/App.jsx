import React, { useEffect, useState } from "react";
import Users from "./components/users";

const App = () => {
  let init = false;

  const [flag, setFlag] = useState(init); //used to toggle greeting(hello/bye)
  const [count, setCount] = useState(0); //used to increment count

  const handle = () => {
    setFlag(!flag); 
    //sets flag to neg val of flag's val 
    //actual flag is not changed while doing !flag but it is changed when setFlag is executed
  };

  const handleIncrment = () => {
    setCount(count + 1);
    //incrment val of count by 1
    //setCount(count ++); directly tries to change const var count
    // but setCount(count + 1); only creates a val that is one greater than val of count and then sets it to count
  };

  useEffect(handle, []);
  //sets flag to hello every time page is relaoded
  //if dependency array is empty then callback func is executed every time page is reloaded

  useEffect(() => {
    if (count == 10) {
      setCount(0);
    }
  }, [count]);
  //count is mointored using dependency array
  //if count is greater tha 10 count is set to 0

  return (
    <div>
      <div>
        {flag ? <h1>hello</h1> : <h1>bye</h1>}
        <button onClick={handle}>Change</button>
        {/* toggles between hello and bye using handle func */}
      </div>
      <div>
        <h3>{count}</h3>
        <button onClick={handleIncrment}>Increment</button>
        {/* increments using handleIncrment func  */}
      </div>
      <Users/>
    </div>
  );
};

export default App;
