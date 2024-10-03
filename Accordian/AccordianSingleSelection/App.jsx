import { useState } from 'react'
import './App.css'
import data from './component/Data';
import Accordian from './component/Accordian';

function App() {
  const [selected, setSelected] = useState([]);

  const handleSelection = (currId) => {
    if (selected[0] === currId) {
      setSelected([]); // Close the currently open accordion
    } else {
      setSelected([currId, "-"]); // Open the selected accordion
    }
  }

  const handleMultiSelection = (currId) => {
    const letMultiple=[...multipleArr];
  }

  return (
    <center>
      {data.length > 0 ?
        <Accordian data={data} handleSelection={handleSelection} selected={selected}></Accordian> :
        <h1>No data available</h1>}
    </center>
  )
}

export default App
