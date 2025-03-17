import React from 'react'
import { useParams } from 'react-router-dom'

const PrintId = () => {

    const {id}=useParams(); // Extracts the dynamic `id` parameter from the URL

  return (
    <div>Id= {id}</div>
  )
}

export default PrintId