import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {

  const params=useParams();

  return (
    <div>RecipeDetails of {params.id}</div>
  )
}

export default RecipeDetails