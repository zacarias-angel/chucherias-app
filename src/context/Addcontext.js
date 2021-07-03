import React,{useState, createContext} from 'react';


export  const Addcontext = createContext([]);
export const AddProvider = ({children}) =>{
    const [hookcontext,setHookcontext] = useState([])
    return (<Addcontext.Provider value = {[hookcontext,setHookcontext]}>
        {children}
    </Addcontext.Provider>)
}

