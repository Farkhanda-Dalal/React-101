import React from 'react'
import { useLocation, useOutletContext, useParams } from 'react-router-dom'

const Item = () => {
  const {id}=useParams();
  const data=useOutletContext();
  console.log(data)

  return (
    <div className='border'>
        <h1>Product Details</h1>
    </div>
  )
}

export default Item