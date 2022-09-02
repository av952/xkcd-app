import fs from 'fs'
import { Display } from '../components/Display';
import Header from "../components/Header";

export default function Home({elementos}) {

  const data = elementos.map((el,index)=>{
    return(
      <Display key={index} datos={el}/>
      
    )
  })
  return (
    <div >
      <Header/>
      {data}
    </div>
  );
}

export async function getStaticProps(context){

  let elementos =  fs.readFileSync('./comics/data.json')
  elementos = JSON.parse(elementos)

  //console.log(2,elementos);
  console.log(88,typeof elementos);

  
  return{
    props:{
      elementos
    }
  }
}
