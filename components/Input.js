import { useContext, useState } from 'react'
import styles  from '../styles/header.module.scss'
import { Context } from '../components/Context.jsx'


export default function Input(){
    const {all} = useContext(Context);

    function getSuggestionValue(suggestion) {
        
        let getres= suggestion.map(el=> <span key={el.num}>{el.title}</span>  ) 
        return  getres

      }

    const suggestion = (
        <div className={styles.contaninersug}>
            <input type='text' placeholder='Search'></input>
            <div className={styles.subcontainer} >
                {getSuggestionValue(all)}
            </div>
        </div>
    )

    const {setInput} = useContext(Context) 
    return(
        <div className={styles.inputContainer}>
            <input onChange={(el)=> setInput(el.target.value)} placeholder='Search' type='text'></input>
             <span><i className={`bi bi-search ${styles.i}`}></i></span>

             {suggestion}
        </div>


    )
}