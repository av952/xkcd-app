import { Datos } from '../components/Context'
import '../styles/globals.css'
import styles  from '../styles/header.module.scss'


function MyApp({ Component, pageProps }) {
  return (
    <Datos>
   <Component {...pageProps} />
    </Datos>
  ) 
}

export default MyApp
