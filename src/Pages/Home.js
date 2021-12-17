import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css';
function Home() {
    const[value,setValue]=useState()
    const navigate=useNavigate()
    return (
        <div className="App">
            <input type="text" onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>{navigate(`/contact/${value}`)}}>About</button>
        </div>
    )
}

export default Home
