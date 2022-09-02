import { useContext, useEffect } from "react";
import { Context } from "./Context";
import Input from "./Input";

export default function Buscador() {
  const { elinput, setInput,data,setAll } = useContext(Context);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    console.log(22,data);
    return inputLength === 0
      ? []
      : data.filter(
          (lang) =>
            lang.title.toLowerCase().slice(0, inputLength) === inputValue
        );
  };
  const res = getSuggestions(elinput);

    useEffect(()=>{
      setAll(()=>res)
    },[elinput])

}




