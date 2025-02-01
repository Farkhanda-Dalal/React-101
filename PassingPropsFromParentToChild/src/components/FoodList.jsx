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
