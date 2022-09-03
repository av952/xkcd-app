import { useContext, useState } from "react";
import styles from "../styles/header.module.scss";
import { Context } from "../components/Context.jsx";

export default function Input() {
  const { setAll,all,setInput,elinput,setClick} = useContext(Context);

  function onclick(el){
    setInput(el.target.innerHTML)
    setClick(['a'])
    setAll([])

  }

  /* Genera los elementos que se ven bajo el input */
  function getSuggestionValue(suggestion) {
    let getres = suggestion.map((el) => <p key={el.num} onClick={onclick} >{el.title}</p>);
    return getres;
  }

  const suggestion = (
    <div className={styles.inputContainer}>

      <input type="text" value={elinput} onClick={()=>setInput('')}  placeholder="Search"
      onChange={(el) => setInput(()=>el.target.value)}
      ></input>
      
      <div className={styles.subcontainer}>{getSuggestionValue(all)}</div>
    </div>
  );

  return (
    <div className={styles.inputContainer}>

      {suggestion}
      <span>
        <i className={`bi bi-search ${styles.i}`}></i>
      </span>

    </div>
  );
}
