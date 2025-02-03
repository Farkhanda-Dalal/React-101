import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

const App = () => {

  const reducer=(state, action)=>{
     if(action.type=='increment') return {count: state.count+1}
     else return {count: state.count-1} 
  }

  // const [num, setNum]=useState(0)
  const [state, dispatch]=useReducer(reducer,{count:0})

  const increment=()=>{
    // setNum(prev=>prev+1)
    dispatch({type:'increment'})
  }

  const decrement=()=>{
    // setNum(prev=>prev-1)
    dispatch({type:'decrement'})

  }

  return (

    <div >
    <button onClick={increment}>+</button>
    <div>{state.count}</div>
    <button onClick={()=>decrement()}>-</button>
    </div>

  )
}

export default App
