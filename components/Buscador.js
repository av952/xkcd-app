import { useContext, useEffect } from "react";
import { Context } from "./Context";
import Input from "./Input";

export default function Buscador({ data }) {
  const { elinput, setInput, all,setAll } = useContext(Context);
  console.log(123, all,setAll);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    console.log("input--", inputValue);

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




