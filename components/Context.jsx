import { createContext, useState } from "react";

export const  Context = createContext()

export const Datos = ({children})=>{    

    const [elinput,setInput] = useState('')
    const [all,setAll] = useState([])
    const[data,setData] =useState([])

    return(
        <Context.Provider  value={{elinput,setInput,all,setAll,data,setData}}  >
            {children}
        </Context.Provider>
    )
}