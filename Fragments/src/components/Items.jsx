import ListItem from "./ListItem";

let FoodList=(props)=>{
  let food=props.foodList;

  return (
    <ul className="list-group">
      {food.map((item)=>(
          <ListItem food={item} key={item} handleBuyButton={()=>console.log(`${item} was purchased `)} ></ListItem>
      ))}
    </ul>
  )
}

export default FoodList;


