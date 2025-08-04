import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const RecipeDetails = () => {

  const params=useParams();
  console.log(params)

  const loc=useLocation();
  console.log(loc.pathname);

  return (
    <div>RecipeDetails of {params.id}</div>
  )
}

export default RecipeDetails