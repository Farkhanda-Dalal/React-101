const Input = ({handleOnChange,handleSubmit}) => {
  return (
    <div className="m-4">
    <input type="text" placeholder="Enter" className="border-1"
    onChange={handleOnChange}/>
    <button className="border-1" onClick={handleSubmit}>Add Item</button>
    </div> 
)
}

export default Input
