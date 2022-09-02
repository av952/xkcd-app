import { createContext, useState } from "react";

export const  Context = createContext()

export const Datos = ({children})=>{    

    const [elinput,setInput] = useState('a')
    console.log(2222,elinput);

    return(
        <Context.Provider  value={{elinput,setInput}}  >
            {children}
        </Context.Provider>
    )
}