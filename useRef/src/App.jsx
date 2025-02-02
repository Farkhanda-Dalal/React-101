import React, { useRef } from 'react'

const App = () => {
  const inputRef = useRef(null); // Creating a reference
  const getCount=useRef(0);

  const focusInput = () => {
    inputRef.current.focus(); // Accessing the input directly
  };

  function handleCount(){
    console.log(getCount.current++)
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" 
      onChange={()=>handleCount()}/>
      <button onClick={focusInput}>Focus the Input</button>
    </div>
  );
}

export default App
