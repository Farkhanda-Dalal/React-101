import { useState } from 'react'
import './App.css'
import { Fragment } from 'react'
import FoodList from './components/Items'
import Error from './components/ErrorMessage'
import FoodInput from './components/FoodIbput'

function App() {
  const food=["Idli","Dosa","Chicken","Paneer","Eggs"]

  //JSX does not allow control statements inside return block thats y if has to be used outside return 
  //if(food.length == 0) return <h3>I am hungry</h3>

// useState() always returns an arr of 2 vals curr state and  method to change the state
//initial val can be passed as arg to useState()
  // let textState=useState("Food Item Entered");
  // let currState=textState[0];
  // let setTextState=textState[1];
  let [currState, setTextState]=useState();
  let [foodItems, setFoodItems]=useState(["Idli","Dosa","Chicken","Paneer","Eggs","Apple"]);
  // console.log(currState);

  // const handleOnChange=(event)=>{
  //   console.log(event.target.value);
  //   setTextState(event.target.value)
  // }

  const handleKeyEnter=(event)=>{ 
    if(event.key=='Enter'){
      let newFoodItem=event.target.value;
      setFoodItems([...foodItems,newFoodItem])
    }
  }

  return <Fragment>
    <h1>Healthy Foods</h1>
    {/* <FoodInput handleOnChange={handleOnChange}></FoodInput> */}
    <FoodInput handleKeyEnter={handleKeyEnter}></FoodInput>
    <Error foodList={foodItems}></Error>
    <FoodList foodList={foodItems}></FoodList>
    
    {/* args can be sent to components using attributes in tags and can be used by funcs in components using props */}
    </Fragment>
}

export default App

//wheneven we return elements we need to wrap it in a parent div
//This creates unneccesary extra div in DOM
//Fragment is prvided by React class from react package
//instead of wrapping with <Fragment></Fragment> we can also just wrap with <></> React recognizes this as fragment as well no need to import Fragment then

//Renders list items from arrays
//key is added in virtual DOM
//key property assisgns unique key to for every item to optimze re-renders i.e that only the specified key will be re-rendered during remove or add

//CONDITIONAL RENDERING:
//This helps in only adding the requested or required part to DOM and the uneccessary elements will not be added to the DOM 
{/* CONDITIONAL RENDERING:
    1. if: 
      {if(food.length == 0) return <h3>I am hungry</h3>} This will not work as JSX does not allow control statements inside return block instead of this ternary operator can be used like:
    2. Ternary: 
      {food.length==0 ? <h3>I am hungry</h3> : null}
      This will do nothing if cond is false 
    3. Conditional operators:
      {food.length==0 && <h3>I am hungry as fuck</h3>}
      if falsey val is returned in 1st part of expression then 2nd part is not checked, if 1st part is true then the 2nd part gets returned
*/}
