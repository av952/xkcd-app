import fs from "fs";
import Header from "../components/Header";
import styles  from '../styles/header.module.scss'


/* ENCARGADO DE MOSTRAR LA INFORMACIÓN  DETALLADA DESPUÉS DE QUE HAN ECHO CLICK EN LA IMAGEN DEL MENÚ PRINCIPAL */
export default function imagen({datos2}) {
  return (
    <>
    <Header/>
    <div className={styles.containerImagen}>

      <p>{datos2.alt}</p>
       <img
        src={datos2.img}
       >
       </img>
    </div>;
    
    </>
  ) 
}

//GENERADOR DE PATH Y ENCARGADO DE VERIFICAR LA EXISTENCIA DE LOS MISMOS
export async function getStaticPaths(){

  let elementos =  fs.readFileSync('./comics/data.json')
  elementos = JSON.parse(elementos)

  const concatenado = elementos.map(el=> el.title.split(' ').join('-').toLowerCase())

  const paths  = elementos.map(el=> ({params:{id:`${el.num}`}}))

  return{
    paths,
    fallback: false
  }

}

//GENERADOR DE LA DATA PUEDE SER POR FETCH O EN ESTE CASO LEYENDO UN ARCHIVO
export async function getStaticProps({params}){

  //lectura de datos  
  let elementos =  fs.readFileSync('./comics/data.json')
  elementos = await JSON.parse(elementos)
  //fin lectura
  
  const concatenados = elementos.map(el=> el.title.split(' ').join('-').toLowerCase())
  const datos  = concatenados.find(el=> el == params.id)
  const datos2 =  elementos.find(el => el.num == params.id)
  return{
    props:{
      datos2
    }
  }
}
