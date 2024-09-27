import { useContext, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { ToDoItemsContext } from "../store/ToDoItemsContext";

let Inputs = () => {

  const contextObj=useContext(ToDoItemsContext);
  const addNewItem=contextObj.addNewItem;

  const [newItemName, setNewItemName] = useState("");
  const [newItemDate, setNewItemDate] = useState("");

  const handleIp = (event) => {
    setNewItemName(event.target.value);
    console.log(newItemName);
  }

  const handleDate = (event) => {
    setNewItemDate(event.target.value);
    console.log(newItemDate);
  }

  const addItem=()=>{
    addNewItem(newItemName, newItemDate);
    setNewItemDate("");
    setNewItemName("");

  }

  return (
    <div id='taskDetails' className='todo-grid border-2 border-black'>
      <input type="text" placeholder=" Let's get this done...." className='input-styling col-span-12' onChange={(event)=>handleIp(event)} value={newItemName} />

      <input type="date" className='input-styling  col-span-11' onChange={(event)=>handleDate(event)} value={newItemDate} />

      <button onClick={addItem}>
        {/* <i className="bi bi-plus-circle text-purple-500 text-4xl col-span-2"></i> */}
        <IoAddCircleOutline className=" text-purple-500 text-4xl col-span-1"/>
      </button>
    </div>
  )
}

export default Inputs;