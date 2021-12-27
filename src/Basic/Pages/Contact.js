import React from 'react'
import {useParams} from 'react-router-dom'
function Contact() {
    const {userName}=useParams()
    return (
        <div className="App">
            Contact {userName}
        </div>
    )
}

export default Contact
