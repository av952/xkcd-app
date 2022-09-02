import Link from 'next/link'
import React from 'react'
import styles  from '../styles/header.module.scss'


export const Display = ({datos}) => {

    const nuevoTitle = datos.title.split(' ').join('-').toLowerCase()
    
  return (
    <div className={styles.containerDisplay}>

        <p>{datos.title}</p>
        <Link href='/[id]' as={ `/${datos.num}`} >
        
        <img 
        src={datos.img}
        >

        </img>
            </Link>

    </div>
  )
}
