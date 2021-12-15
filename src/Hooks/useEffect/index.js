// https://medium.com/makemytrip-engineering/react-hooks-understanding-the-basics-d7f8290f445e

import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [value, setValue] = useState('parth')
    const [add, setAdd] = useState(1)
    const updateTitle = () => {
        document.title = 'You are ' + add + ' years old!'
    }
    useEffect(() => {
        setValue('Hello')
        document.title = 'You are ' + add + ' years old!'
        return()=>{
            console.log("11")
        }
    }, [updateTitle])


    const addValue = () => {
        setAdd(add + 1)
    }
    const minusValue = () => {
        if (add == 1) {
            setAdd(1)
        }
        else {
            setAdd(add - 1)
        }
    }
    return (
        <div>
            <h1>{value},  I am shah {add}</h1>
            <button onClick={addValue}>Add</button><br /> <br />  <button onClick={minusValue} disabled={add == 1 ? false : false}>Minus</button>
        </div>
    )
}

export default UseEffect






