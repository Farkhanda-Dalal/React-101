import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    const handleButton=()=>{
        navigate('/about');
    }
    return (
    <div>
        <div>Home</div>
        <button onClick={handleButton}>Go to About </button>

        {/* Implementation of Button using Link */}
        {/* <Link to='/about' >
            <button>Go to About</button>
        </Link> */}
    </div>
    
  )
}

export default Home