import fs from 'fs'
import { useState } from 'react';
import { Display } from '../components/Display';
import Header from "../components/Header";
import styles  from '../styles/header.module.scss'

export default function Home({elementos}) {



  const [num,setNum]= useState(0)

  console.log(8785,num);

  return (
    <div >
      <Header/>
      <div className={styles.botonesindex}>

      <span onClick={()=> num >0 ? setNum(num-1):0}>Anterior</span>
      <span  onClick={()=>setNum(Math.floor(Math.random()*elementos.length)) } >Random</span> 
      <span  onClick={()=>setNum(num+1) } >Siguiente</span> 
      </div>
      <Display datos={elementos[num]} ></Display>

    </div>
  );
}

export async function getStaticProps(context){

  let elementos =  fs.readFileSync('./comics/data.json')
  elementos = JSON.parse(elementos)

  return{
    props:{
      elementos
    }
  }
}
