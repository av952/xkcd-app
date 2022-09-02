import fs from 'fs'
import { useContext, useEffect, useState } from 'react';
import { Display } from '../components/Display';
import Header from "../components/Header";
import styles  from '../styles/header.module.scss'

import {Context} from '../components/Context'
import Buscador from '../components/Buscador';

export default function Home({elementos}) {
  const [num,setNum]= useState(0)
  const {elinput,setData,data} = useContext(Context)

  useEffect(()=>{
    setData(elementos)
  },[])
  console.log(21,data);

  return (
    <>
      <Buscador data={elementos} />
      <Header />
      <div className={styles.botonesindex}>

      {/* Botones de navegación para las imagenes */}
      <span onClick={()=> num >0 ? setNum(num-1):0}>Anterior</span>
      <span  onClick={()=>setNum(Math.floor(Math.random()*elementos.length)) } >Random</span> 
      <span  onClick={()=>setNum(num+1) } >Siguiente</span> 
      </div>
      <Display datos={elementos[num]}/>

    </>
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
