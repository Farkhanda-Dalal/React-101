import React, { useState } from 'react'
import './App.css'

const App = () => {
  let [currCount, setCount]=useState(0)

  function handle(){
    setCount(currCount+1)
    console.log(currCount)
  }
  return (
    <div className='flex flex-col h-screen w-screen justify-evenly items-center'>
      <div className='flex gap-14 justify-evenly items-center '>
        {currCount}
        <button className='text-pink-400 border-1 border-black p-2 rounded-md'
        onClick={handle}
        >Increment</button>
      </div>
      <h1>Count : {currCount}</h1>
    </div>
  )
}

export default App
