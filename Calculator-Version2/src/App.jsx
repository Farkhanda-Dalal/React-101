import './App.css'
import Input from './components/Input'
import Buttons from './components/Buttons'
import { useState } from 'react';

function App() {
  const buttons = [0, 1, '+', 2, 3, '-', 4, 5, '*', 6, 7, '/', 8, 9, 'C'];

  let [calVal, setCalVal]=useState("");

  const onButtonClick=(button)=>{
    console.log(button);
    if(button==='C'){
      setCalVal("");
    }
    else if(button==="Calc"){
      const result=eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplay=calVal+button;
      setCalVal(newDisplay);
    }
    
  }

  const finalAns=(inputString)=>{

  }

  return (
    <center className='bg-slate-400 min-h-[55vh] min-w-[50vw]'>
      <Input input={calVal} onButtonClick={onButtonClick}></Input>
      <Buttons arr={buttons} onButtonClick={onButtonClick}></Buttons>
    </center>
  )
} 

export default App
