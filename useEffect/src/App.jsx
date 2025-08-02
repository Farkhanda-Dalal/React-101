import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //EMPTY DEPENDECY ARRAY
  //SHOW I will ans ur questions AFTER 5 SEC OF PAGE LOAD
  // const [ans, setAns] = useState("");

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setAns("I will ans ur questions");
  //   }, 5000);

  //   return () => clearTimeout(timer); // cleanup
  // }, []);

  // return (
  //   <>
  //     <h1>This will happen on 1st page load</h1>
  //     <h4>{ans}</h4>
  //   </>
  // );

  //CHANGE TEXT ACC TO CHANGE IN FLAG VAL
  // const real = "I am saying the truth";
  // const lie = "I am lyingggggg";
  // const [flag, setFlag] = useState(true);
  // const [ans, setAns] = useState(real);

  // //Whenever flag is changed value of text is changed as a side effect as flag is passed in defendency arr
  // useEffect(() => {
  //   !flag
  //     ? setAns((prevAns) => (prevAns = lie))
  //     : setAns((prevAns) => (prevAns = real));
  // }, [flag]);

  // return (
  //   <>
  //     {/* ans is changed as a side effect of change in flag */}
  //     <h1>{ans}</h1>
  //     {/* Changes flag on click */}
  //     <button
  //       onClick={() => {
  //         setFlag((flag) => !flag);
  //       }}
  //     >
  //       Change testimony
  //     </button>
  //   </>
  // );

  //CHANGE COLOUR OR TEXT AFTER CONDITION IS REACHED
  const [count, setCount]=useState(0);
  const [style, setStyle]=useState(false)

  //Sets style var to true when count>10
  useEffect(()=>{
    if(count>10 && !style) setStyle((style)=>style=true)
  },[count, style])

  return(
    <>
      <h1 className="text-amber-400">helo</h1> <br />

      {/* Style is changed  */}
      <h3 className={ style ? "text-blue-600" : "text-amber-400"}>{count}</h3>

      {/* Count is incr on click */}
      <button onClick={()=>setCount((count)=>count+1)}>Increment count</button>
    </>
  )
}

export default App;
