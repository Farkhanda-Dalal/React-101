import { useContext } from "react";
import Message from "./Message";
import { IoTrashOutline } from "react-icons/io5";
import { ToDoItemsContext } from "../store/ToDoItemsContext";

let Task = () => {

  let contextObj = useContext(ToDoItemsContext);
  const todoItems=contextObj.todoItems;
  const removeItem=contextObj.removeItem;

  return (
    <div className='todo-grid bg-purple-500 text-white rounded-2xl px-3 items-center'>
      {todoItems.length === 0 && <Message></Message>}

      {todoItems.map(item => (
        <>
          <div id='task' className='col-span-9 text-xl cursor-pointer' key={item.name + item.dueDate}>
            {item.name}
          </div>

          <span className="col-span-2" key={item.dueDate}>
            {item.dueDate}</span>

          <button className='text-xl' onClick={() => removeItem(item.name)}>
            {/* <i className="bi bi-trash3"></i> */}
            <IoTrashOutline className="col-span-1" />
          </button>
        </>
      ))}

    </div>
  )
}

export default Task;