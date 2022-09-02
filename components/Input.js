import { useContext, useState } from 'react'
import styles  from '../styles/header.module.scss'
import { Context } from '../components/Context.jsx'


export default function Input(){

    const {setInput} = useContext(Context) 
    return(
        <div className={styles.inputContainer}>
            <input onChange={(el)=> setInput(el.target.value)} placeholder='Search' type='text'></input>
             <span><i className={`bi bi-search ${styles.i}`}></i></span>
        </div>
    )
}