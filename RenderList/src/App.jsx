import './App.css'

function App() {

  const basket = ["apple", "mango", "banana"];
  const products=[
    {
      id:101,
      name:"Phone",
      price:20000
    },
    {
      id:102,
      name:"Laptop",
      price:90000
    },{
      id:103,
      name:"Microwave",
      price:30000
    },
  ]

  return (
    <>
      <h4>Rendered array</h4>
      <ol className="basket">
        {basket.map((fruit, index)=>{
          return(
            <li key={index}>{fruit}</li>
          )
        })}
      </ol>

      <h4>Rendered obj</h4>
      <ol>
        {
          products.map((prod,index)=>{
            return (
              <li key={index}>{prod.name} has id={prod.id} and price={prod.price}</li>
            )
          })
        }
      </ol>
    </>
  )
}

export default App
