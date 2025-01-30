import React, { Fragment, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodList from './components/FoodList'
import EmptyMessage from './components/EmptyMessage'
import Input from './components/Input'
import "./App.css"

const App = () => {
  const [food, setFood]=useState(["apple", "egg", "chicken", 'MEAT'])
  let textState=useState()
  let curr=textState[0]
  let set=textState[1]

  function handle(event){
    set(event.target.value)
    console.log(curr)
  }
  
  const handleOnSubmit = () => {
    console.log(curr)
    //if u want to add same name items den remove this if statement
    if (curr && !food.includes(curr)) {
      setFood((blah) => [...blah, curr]); // Use spread operator to avoid mutating state
      console.log(food); // food will still be outdated here due to state update being asynchronous
    }
  };
  // let food=[]
 
  return (
    <Fragment>
      <h1 className='trial'>Healthy Food</h1>
      <Input handleOnChange={handle} handleSubmit={handleOnSubmit}></Input>
      <div>{curr}</div>
      <EmptyMessage food={food}></EmptyMessage>
      <FoodList List={food}></FoodList>
    </Fragment>
  ) 
}

export default App;
