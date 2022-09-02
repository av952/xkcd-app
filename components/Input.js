import { useState } from 'react'
import styles  from '../styles/header.module.scss'


export default function Input(){
    const [text,setText] = useState('')

    return(
        <div className={styles.inputContainer}>
            <input onChange={(el)=> setText(el.target.value)} placeholder='Search' type='text'></input>
             <span><i className={`bi bi-search ${styles.i}`}></i></span>
        </div>
    )
}