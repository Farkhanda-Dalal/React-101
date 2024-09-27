let Error=(props)=>{
  let food=props.foodList

  let emptyMessage= food.length==0 ? <h3>I am hungry as hell</h3> :null;
  return emptyMessage;
}

export default Error;