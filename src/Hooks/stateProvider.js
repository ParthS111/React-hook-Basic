import React,{createContext, useContext, useMemo, useReducer, useState} from 'react'

export const StateContext = createContext();

export const UserContext = createContext({
    user:null,
    setUser:() => {},
})


const StateProvider=({ reducer, children })=> {
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);
    const [state, dispatch] = useReducer(reducer, {});
    const userRequire ={user,setUser}
    const store = useMemo(() => [state, dispatch], [state],userRequire,);
  
    return (
       <StateContext.Provider value={store}>
           <UserContext.Provider value={userRequire}>
           {children}
           </UserContext.Provider>
       </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext);

export default StateProvider;
