import React, { useState } from 'react'
import '../App.css'

export const Adder = ({handleInput}) => {

  const [taskName, setTaskName]=useState("");
  const [taskDate, setTaskDate ]=useState("");

  function handleTaskName(event){
    setTaskName(event.target.value)
  }

  function handleTaskDate(event){
    console.log(event)
    setTaskDate(event.target.value)

  }

  function handleButton(taskName, taskDate){
    
    handleInput(taskName, taskDate)
    setTaskDate("")
    setTaskName("")

  }

  return (
    <div className="container text-center">
    <div className="row flex justify-evenly ToDoAdder">
      <div className="col-5">
        <input type="text" placeholder='Enter You Task ' className='p-2 border-2 border-black' id='name'
        onChange={handleTaskName} value={taskName}
        />
      </div>
      <div className="col-5">
        <input type="date" name="" id="" className='p-2 border-2 border-black' id='date'
        onChange={handleTaskDate} value={taskDate}
        />
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-success"
      onClick={()=>handleButton(taskName,taskDate)}>Add</button>
      </div>
    </div>
    </div>
  )
}
