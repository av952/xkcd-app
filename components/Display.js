import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import styles  from '../styles/header.module.scss'
import{Context}from '../components/Context'

/* ENCARGADO DE ENLAZAR LAS PÁGINAS  -- ENVIA LA INFORMACIÓN A [ID].JS */
/* MUESTRA LAS IMAGENES DEL HOME */

export const Display = ({datos}) => {   
  console.log("🚀 ~ file: Display.js ~ line 10 ~ Display ~ datos", datos)
  
  const{select,click}= useContext(Context)

    const img1 =  select.map(el=>el.img)
    const img = click.length>0?img1:datos.img

  return (
    < > 
        <div className={styles.maincontainer}>

        <Link href='/[id]' as={ `/${datos.num}`} >
        <img className={styles.imgcontainer}  src={img}></img>
          </Link>
          <span> 
            <a style={{textDecoration:'none',color:'black'}} href='https://twitter.com/avxcdeveloper' target='_blank' rel="noreferrer">
             <span style={{margin:'10px', position:'absolute'}} >A.V.XC ✌️</span> 
            </a>
            </span> 
</div>

    </>
  )
}
