import Link from 'next/link'
import React from 'react'
import styles  from '../styles/header.module.scss'

/* ENCARGADO DE ENLAZAR LAS PÁGINAS  -- ENVIA LA INFORMACIÓN A [ID].JS */

export const Display = ({datos}) => {    
  return (
    < > 
        <div className={styles.maincontainer}>

        <Link href='/[id]' as={ `/${datos.num}`} >
        <img className={styles.imgcontainer} src={datos.img}></img>
          </Link>
</div>

    </>
  )
}
