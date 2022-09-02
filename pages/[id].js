import fs from "fs";
import Header from "../components/Header";
import styles  from '../styles/header.module.scss'

export default function imagen({datos2}) {
  return (
    <>
    
    <Header></Header>
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


export async function getStaticPaths(){

  let elementos =  fs.readFileSync('./comics/data.json')
  elementos = JSON.parse(elementos)
  console.log(8686,elementos[0].num);


  const concatenado = elementos.map(el=> el.title.split(' ').join('-').toLowerCase())

  const paths  = elementos.map(el=> ({params:{id:`${el.num}`}}))


  return{
    paths,
    fallback: false
  }

}

export async function getStaticProps({params}){

  console.log(8626,params.id);

  let elementos =  fs.readFileSync('./comics/data.json')
  elementos = await JSON.parse(elementos)
  
  const concatenados = elementos.map(el=> el.title.split(' ').join('-').toLowerCase())
  const datos  = concatenados.find(el=> el == params.id)

  const datos2 =  elementos.find(el => el.num == params.id)

 console.log(7575,datos2);

  return{
    props:{
      datos2
    }
  }
}
