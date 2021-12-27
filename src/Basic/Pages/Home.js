import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css';
function Home() {
    const[value,setValue]=useState()
    const navigate=useNavigate()

    const sendButton=()=>{
        if(value){
        navigate(`/contact/${value}`)
        }
        else{
            alert('Please add proper email address')
        }
    }

    return (
        <div className="App">
            <input type="text" onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={sendButton}>About</button>
        </div>
    )
}

export default Home
