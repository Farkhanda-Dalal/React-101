import React, { useContext } from 'react'
import { ChangeContext } from '../store/Context'

const Button = () => {

  const {setChange}=useContext(ChangeContext);
  return (
    <button onClick={() => { setChange("Fake") }}>Click</button>
  )
}

export default Button
