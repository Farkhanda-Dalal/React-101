// let FoodInput=({handleOnChange})=>{
//   return <>
  
//   <input type="text" placeholder='Enter food here ' className='border border-black' onKeyDown={handleOnChange}/>
//   </>
// }

// export default FoodInput;

let FoodInput=({handleKeyEnter})=>{
  return <>
  
  <input type="text" placeholder='Enter food here ' className='border border-black' onKeyDown={handleKeyEnter}/>
  </>
}

export default FoodInput;