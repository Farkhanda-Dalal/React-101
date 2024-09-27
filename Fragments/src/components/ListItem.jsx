let ListItem = ({food, handleBuyButton}) => {
  return (
    <div className="grid grid-cols-12">
      <li className="list-group-item col-span-10" >{food}</li>
      <button className="col-span-2 border border-black hover:cursor-pointer"
        onClick={handleBuyButton}>Buy</button>
    </div>
  )
}

export default ListItem;