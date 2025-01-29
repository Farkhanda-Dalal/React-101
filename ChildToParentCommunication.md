# Communication
- Communication from parent to child is done by passing props to the child
- Communication from child to parent is done by passing functions as props to the child

## Example
Parent Component (FoodList):
```
import React from 'react'
import Item from './ListItem'

// Props passed using props obj and property of item was chained using . operator
const FoodList = (props) => {

  function handle(item){
    return console.log(`${item} was bought`)
  }

  return (
    <ul className="list-group">
             {props.List.map((item)=>(
              <Item listItem={item} handle={()=>handle(item)}></Item>
            ))}
    </ul>
  )
}


export default FoodList
```

Child Component (ListItem):
```
import React,{Fragment} from 'react'

// Props passed using props obj and then desruvting props obj in a var

const Item = ({listItem,handle}) => {
    

  return (
    <div className='row p-4'>
      <div className='col'>
      {
        listItem==="egg"? (<li key={listItem} className="list-group-item">Egg is smelly</li>): 
        listItem==="apple" ? (<li key={listItem} className="list-group-item">Apple a day keeps the doc away</li>) :
        (<li key={listItem} className="list-group-item">{listItem} </li>)
      }
      </div>
      <div className='col'>
        <button className='bg bg-success'
        onClick={handle}
        >Buy</button>
      </div>
    </div>
  )
}


export default Item
```
  
## Chronology Flow

### 1. Rendering:
1. `FoodList` renders, and inside it, the `Item` component is rendered for each item in `props.List` (e.g., `["egg", "apple", "chicken"]`).
2. For each `Item`, it receives a `listItem` (the current item, e.g., `egg`) and the `handle` function that logs to the console when clicked.

### 2. Button Click:
1. When the button is clicked, React triggers the `onClick` event and calls `handle()`, passing the `listItem` (e.g., `"egg"`) to the function.

### 3. Function Execution:
1. The `handle` function in `FoodList` receives the `listItem` argument (e.g., `"egg"`), and the calls the function and executes `console.log("${item} was bought")`.

### 4. Console Log:
1. `console.log("egg was bought")` is executed, logging the message to the console.

## Summary of the Chronology:
1. Button is clicked in the `Item` component.
2. `handle` function from `FoodList` is executed because it was passed as a prop.
3. The correct `item` is passed to `handle` when the button is clicked.
4. Console log is printed with the item that was clicked.

This is how the event flows from the button click to the `console.log`.
