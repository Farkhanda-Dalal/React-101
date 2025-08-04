import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = () => {

  const navigate=useNavigate();
  return (
    <>
    <button onClick={() => { navigate('/list') } }>Show RecipeList</button>
    <button onClick={() => { navigate('/upload')} }>Upload Recipe</button>
    </>
    

)
}

export default Button