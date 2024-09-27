import { useState } from 'react'
import './App.css'
import Inputs from './components/inputs'
import Task from './components/Task'
import { ToDoItemsContext } from './store/ToDoItemsContext'

function App() {

  const initialTodoItems = [

  ]

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (itemName, itemDate) => {
    console.log(itemName);
    console.log(itemDate);

    const newItemsArr = [...todoItems,
    { name: itemName, dueDate: itemDate }];

    setTodoItems(newItemsArr);
  }

  const removeItem = (itemName) => {
    const newItemsArr = todoItems.filter(item => item.name != itemName);
    //only item that is same name is removed
    setTodoItems(newItemsArr);
    console.log(itemName);
  }


  return (
    <ToDoItemsContext.Provider value={{todoItems,addNewItem,removeItem}}>
      <div className='centered-flex flex-col'>
        <center className='min-h-[30vh] max-w-[60vw]'>
          <h1 className='text-purple-500 m-4'>CREATE YOUR TO-DO LIST</h1>
          <Inputs></Inputs>
        </center>
        <Task ></Task>
      </div >
    </ToDoItemsContext.Provider>
  )
}

export default App
