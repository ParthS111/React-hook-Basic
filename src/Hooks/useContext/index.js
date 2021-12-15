import React, { useContext, useState } from 'react'
import { UserContext,  } from '../stateProvider';
const ThemeContext = React.createContext("dark");

function Button() {
    return <ThemeContext.Consumer>
        {theme => <button className={theme}> Amazing button </button>}
    </ThemeContext.Consumer>
}

export default function UseContext() {

    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState()
    const onSave = () => {
        setUser(email.email)
    }
    return (
        <div>
            <input type="text" name="name" id="" onChange={(e) => setEmail({ email: e.target.value })} />
            <button onClick={onSave}> Save</button>
            

            <p>{user}</p>
        </div>
    )
}
