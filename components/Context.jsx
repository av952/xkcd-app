import { createContext, useState } from "react";

export const  Context = createContext()

export const Datos = ({children})=>{    

    const [elinput,setInput] = useState('')
    const [all,setAll] = useState([])
    console.log(2222,elinput);

    return(
        <Context.Provider  value={{elinput,setInput,all,setAll}}  >
            {children}
        </Context.Provider>
    )
}