let Buttons=({arr, onButtonClick})=>{

  return (
    <div className='grid grid-cols-6 gap-4 w-80 mt-8'>
      {arr.map(item=>(
        <button key={item} className='button' onClick={()=>onButtonClick(item)}>{item}</button>
      ))}
    </div>
  )
}

export default Buttons;