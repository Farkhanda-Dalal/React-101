import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodList from './components/FoodList'
import EmptyMessage from './components/EmptyMessage'

const App = () => {
  let food=["apple", "egg", "chicken", 'MEAT']

  // let food=[]
 
  return (
    <Fragment>
      <h1>Healthy Food</h1>
      <EmptyMessage food={food}></EmptyMessage>
      <FoodList List={food}></FoodList>
    </Fragment>
  ) 
}

export default App;
