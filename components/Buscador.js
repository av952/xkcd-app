import { useContext, useEffect } from "react";
import { Context } from "./Context";


export default function Buscador() {
  
  const {elinput,data,setAll,click,setSelect} = useContext(Context);


  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : data.filter(
          (lang) =>
            lang.title.toLowerCase().slice(0, inputLength) === inputValue
        );
  };
  const res = getSuggestions(elinput);

    //setea para poder mostrar la lista deplegable
    useEffect(()=>{
      setAll(()=>res)
    },[elinput])

    //cargar la información cuando se da click en algún elemento de la lista 
    useEffect(()=>{
      setSelect(res)
      //reset de all
      setAll([])
      
    },[click])
}




