import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [user, setUser]=useState()

  //Make API call on load 
  useEffect(()=>{
       getUserData();

  },[])

  //Func to get data from API call
  async function getUserData() {
        try {
          //fetch data from api
        const res=await fetch('https://dummyjson.com/users');

        //convert data into valid json format
        const data=await res.json();

        //SET STATE OF USER
        //users is the arr of userData in the data obj we get from fetch
        //Therefore, we send that arr for tarversal using map
        setUser(data.users)

        console.log(data)
        } catch (error) {
          console.log(error);
        }
}
  
  return(
    <>
      <h1>View all user data</h1>
      {/* API call is fetcjing */}
      {(!user || user.length===0)? <h4>NO USERS</h4> : 
        <ul>
          {
            user.map((u)=>{
              return <li key={u.id}>{u.firstName}</li>;
            })
          }
        </ul>
        
      }
    </>
  )
}

export default App;
