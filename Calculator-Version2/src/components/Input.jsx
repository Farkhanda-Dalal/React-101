const Input = ({input, onButtonClick}) => {
  return <div className='pt-8'>
    <input type="text" id="ip" className='input-style w-60' value={input} readOnly/>
    <button className='input-style w-14 ml-6' onClick={()=>onButtonClick("Calc")}>Calc</button>
  </div>
}

export default Input;

