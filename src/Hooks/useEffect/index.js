// https://medium.com/makemytrip-engineering/react-hooks-understanding-the-basics-d7f8290f445e

import React, { useState,useEffect } from 'react'

function UseEffect() {
    const[value,setValue]=useState('parth')
    
    useEffect(() => {
        setValue('Dhara')
        
    }, [])
    return (
        <div>
            <h1>{value} shah</h1>
        </div>
    )
}

export default UseEffect






