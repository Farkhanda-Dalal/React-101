import React,{Fragment} from 'react'

// Props passed using props obj and then desruvting props obj in a var

const Item = (props) => {
    let {listItem}=props

  return (
    <Fragment>
        {
            listItem==="egg"? (<li key={listItem} className="list-group-item">Egg is smelly</li>): 
            listItem==="apple" ? (<li key={listItem} className="list-group-item">Apple a day keeps the doc away</li>) :
            (<li key={listItem} className="list-group-item">{listItem} </li>)
        }
        
    </Fragment>
  )
}


export default Item
