import React,{Fragment} from 'react'

// Props passed using props obj and then desruvting props obj in a var

const Item = ({listItem,handle}) => {
    

  return (
    <div className='row p-4 '  >
      <div className='col'>
      {
        listItem==="egg"? (<li key={listItem} className="list-group-item">Egg is smelly</li>): 
        listItem==="apple" ? (<li key={listItem} className="list-group-item">Apple a day keeps the doc away</li>) :
        (<li key={listItem} className="list-group-item">{listItem} </li>)
      }
      </div>
      <div className='col'>
        <button className='bg bg-success'
        onClick={handle}
        >Buy</button>
      </div>
    </div>
  )
}


export default Item
