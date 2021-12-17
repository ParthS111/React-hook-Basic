import React, { useContext, useState } from 'react'
import { UserContext,  } from '../stateProvider';
const ThemeContext = React.createContext("dark");


export default function UseContext() {

    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState()
    const onSave = () => {
        console.log(email)
        if(email){
        setUser(email.email)
        }
        else{
            alert('please add email address')
        }
    }
    return (
        <div style={{marginTop:100}}>
            <input type="text" name="name" id="" onChange={(e) => setEmail({ email: e.target.value })} />
            <button onClick={onSave}> Save</button>
            

            <p>{user}</p>
        </div>
    )
}
