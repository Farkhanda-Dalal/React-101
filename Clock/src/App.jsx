import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const date = new Date();

  return <center>
    <h1>THIS IS BHARAT CLOCK</h1>
    <h5>Let's see the time and date in India right now</h5>
    <h1>Date={date.toLocaleDateString()}</h1>
    <h1>Time={date.toLocaleTimeString()}</h1>
  </center>
}

export default App
