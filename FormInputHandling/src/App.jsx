import { useState } from 'react';
import './App.css'
import { useRef } from 'react';

function App() {

  {/* USING useState TO GET INPUT VAL */}
  // const [state,setState]=useState("");
  
  // return (
  //   <>
  //     <h1 className='text-blue-600'>Form Handling</h1>
  //     <input type="text"  className='border' onChange={(event) => { setState(event.target.value ) }}/>
  //     <h5>{`Input was= ${state}`}</h5>
  //   </>
  // )

  {/* USING useRef TO GET INPUT VAL */}
  const ip=useRef(null);

  function handle(){
    alert (ip.current.value);
  }

  return (
    <>
      <h1 className='text-blue-600'>Form Handling</h1>
      <input type="text"  className='border' ref={ip} />
      
      <button type="submit" onClick={handle}>Submit</button>
    </>
  )
}

export default App
